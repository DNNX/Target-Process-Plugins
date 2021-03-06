//-----------------------------------------------------------------------------
// This code was generated by a tool.
// Changes to this file will be lost if the code is regenerated.
//-----------------------------------------------------------------------------
using System;
using System.Xml.Serialization;using System.Runtime.Serialization;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
    /// <summary>
    /// Data Transfer object of Process Practice. Represents Process Practice.
	/// TargetProcess system usage only
    /// </summary>
	[Serializable][DataContract]
	public partial class ProcessPracticeDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return ProcessPracticeID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				ProcessPracticeID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Process Practice ID.
        /// </summary>
        /// <value>The Process Practice ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? ProcessPracticeID { get; set; }
		

		/// <summary>
        /// Gets or sets the Settings. Settings
        /// </summary>
        /// <value>The Settings.</value>
		[DataMember][XmlElement(Order = 4)]public String Settings { get; set; }
		
		/// <summary>
        /// Gets or sets the Process ID. Process
        /// </summary>
        /// <value>The Process ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 5)]public Int32? ProcessID { get; set; }
		
		/// <summary>
        /// Gets or sets the Practice ID. Practice
        /// </summary>
        /// <value>The Practice ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 6)]public Int32? PracticeID { get; set; }
		

		
		/// <summary>
        /// Gets or sets the Process Name. Process
        /// </summary>
        /// <value>The Process Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 7)]public virtual string ProcessName { get; set; }
		
		/// <summary>
        /// Gets or sets the Practice Name. Practice
        /// </summary>
        /// <value>The Practice Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 8)]public virtual string PracticeName { get; set; }
		
	}
	
	
	/// <summary>
    /// Process Practice fields
    /// </summary>
	public enum ProcessPracticeField
	{
        /// <summary>
        /// Settings
        /// </summary>		
		Settings,
        /// <summary>
        /// Process ID
        /// </summary>		
		ProcessID,
        /// <summary>
        /// Practice ID
        /// </summary>		
		PracticeID,
        /// <summary>
        /// Process Name
        /// </summary>		
		ProcessName,
        /// <summary>
        /// Practice Name
        /// </summary>		
		PracticeName,
	}
}
