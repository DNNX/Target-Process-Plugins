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
    /// Data Transfer object of Role Entity Type. Represents Role permission for EntityType in the system..
	/// TargetProcess system usage only
    /// </summary>
	[Serializable][DataContract]
	public partial class RoleEntityTypeDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return RoleEntityTypeID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				RoleEntityTypeID = value;
			}
		}

        /// <summary>
        /// Gets or sets the Role Entity Type ID.
        /// </summary>
        /// <value>The Role Entity Type ID.</value>
		[PrimaryKey]
		[DataMember][XmlElement(Order = 3)]public int? RoleEntityTypeID { get; set; }
		

		/// <summary>
        /// Gets or sets the Is Delete Enabled. Defined whether entity of that type can be deleted
        /// </summary>
        /// <value>The Is Delete Enabled.</value>
		[DataMember][XmlElement(Order = 4)]public Boolean? IsDeleteEnabled { get; set; }

		/// <summary>
        /// Gets or sets the Is Edit Enabled. Defined whether entity of that type can be added ot modified
        /// </summary>
        /// <value>The Is Edit Enabled.</value>
		[DataMember][XmlElement(Order = 5)]public Boolean? IsEditEnabled { get; set; }
		
		/// <summary>
        /// Gets or sets the Role ID. Reference to role
        /// </summary>
        /// <value>The Role ID.</value>
		[ForeignKey]
		[DataMember][XmlElement(Order = 6)]public Int32? RoleID { get; set; }
		

		
		/// <summary>
        /// Gets or sets the Entity Type Name. Type of the entity. For example, Bug, TestCase, Task
        /// </summary>
        /// <value>The Entity Type Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 7)]public virtual string EntityTypeName { get; set; }
		
		/// <summary>
        /// Gets or sets the Role Name. Reference to role
        /// </summary>
        /// <value>The Role Name.</value>
		[RelationName]
		[DataMember][XmlElement(Order = 8)]public virtual string RoleName { get; set; }
		
	}
	
	
	/// <summary>
    /// Role Entity Type fields
    /// </summary>
	public enum RoleEntityTypeField
	{
        /// <summary>
        /// Is Delete Enabled
        /// </summary>		
		IsDeleteEnabled,
        /// <summary>
        /// Is Edit Enabled
        /// </summary>		
		IsEditEnabled,
        /// <summary>
        /// Role ID
        /// </summary>		
		RoleID,
        /// <summary>
        /// Entity Type Name
        /// </summary>		
		EntityTypeName,
        /// <summary>
        /// Role Name
        /// </summary>		
		RoleName,
	}
}
