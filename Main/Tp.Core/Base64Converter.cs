using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;

namespace Tp.Core
{
	public class Base64Converter : JsonConverter
	{
		private const string PLUS_ENC = "_0";
		private const string SLASH_ENC = "_1";
		private const string EQUALS_ENC = "_2";
		private const string PLUS = "+";
		private const string SLASH = "/";
		private const string EQUALS = "=";

		public static readonly JsonConverter Toggle = new FakeConverter();
		private static readonly Encoding Encoding = Encoding.UTF8;

		private class FakeConverter : JsonConverter
		{
			public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
			{
			}

			public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
			{
				return null;

			}

			public override bool CanConvert(Type objectType)
			{
				return false;
			}
		}

		public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
		{
			if (value is string)
			{
				var s = value as string;
				WriteJson(writer, s, serializer);
			}
			else if (value is IEnumerable<string>)
			{
				var enumerable = value as IEnumerable<string>;
				WriteJson(writer, enumerable, serializer);
			}
			else
			{
				throw new NotSupportedException("Could not cast value to string or IEnumerable<string>");
			}
		}

		private void WriteJson(JsonWriter writer, string value, JsonSerializer serializer)
		{
			var stringValue = value;
			writer.WriteValue(IsBase64Enabled(serializer)
								? Encode(stringValue)
								: stringValue);
		}

		private void WriteJson(JsonWriter writer, IEnumerable<string> value, JsonSerializer serializer)
		{
			writer.WriteStartArray();
			value.ForEach(x => WriteJson(writer, x, serializer));
			writer.WriteEndArray();
		}

		private bool IsBase64Enabled(JsonSerializer serializer)
		{
			return serializer.Converters.Contains(Toggle);
		}

		public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
		{
			if (reader.TokenType == JsonToken.Null)
			{
				return null;
			}
			if (objectType != typeof (string) || reader.TokenType != JsonToken.String)
			{
				throw new Exception("Can not read base64 encoded value");
			}
			string str = reader.Value.ToString();
			return IsBase64Enabled(serializer) ? Decode(str) : str;
		}

		public static string Decode(string str)
		{
			try
			{
				if (str.IsNullOrEmpty())
				{
					return str;
				}
				var sb = new StringBuilder(str);
				sb.Remove(sb.Length - 1, 1);
				sb.Remove(0, 4);
				sb.Replace(EQUALS_ENC, EQUALS);
				sb.Replace(SLASH_ENC, SLASH);
				sb.Replace(PLUS_ENC, PLUS);
				return Encoding.GetString(Convert.FromBase64String(sb.ToString()));
			}
			catch(Exception e)
			{
				throw new ArgumentException("Could not decode base64 string '{0}'".Fmt(str),e);
			}
		}


		public static string Encode(string str)
		{
			if (str == null)
			{
				return null;
			}
			var base64String = Convert.ToBase64String(Encoding.GetBytes(str));
			var result = new StringBuilder(base64String);
			result.Replace(PLUS,PLUS_ENC);
			result.Replace(SLASH,SLASH_ENC);
			result.Replace(EQUALS,EQUALS_ENC);
			result.Insert(0, "b64_");
			result.Append("_");
			return result.ToString();
		}

		public override bool CanConvert(Type objectType)
		{
			return objectType == typeof(string) || objectType == typeof(IEnumerable<string>);
		}
	}
}