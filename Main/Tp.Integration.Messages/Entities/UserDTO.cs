﻿//-----------------------------------------------------------------------------
// This code was generated by a tool.
// Changes to this file will be lost if the code is regenerated.
//-----------------------------------------------------------------------------
using System;
using Tp.Integration.Common;

namespace Tp.Integration.Common
{
    /// <summary>
    /// Data Transfer object of User. 
    /// </summary>
	[Serializable]
	public partial class UserDTO : DataTransferObject
	{
        /// <summary>
        /// Gets or sets the ID.
        /// </summary>
        /// <value>The ID.</value>		
		[PrimaryKey]
		public override int? ID
		{
			get { return UserID; }
			set
			{
				if (value == int.MinValue)
					value = null;

				UserID = value;
			}
		}

        /// <summary>
        /// Gets or sets the User ID.
        /// </summary>
        /// <value>The User ID.</value>
		[PrimaryKey]
		public int? UserID { get; set; }
		

		/// <summary>
        /// Gets or sets the First Name. First Name
        /// </summary>
        /// <value>The First Name.</value>
		public String FirstName { get; set; }

		/// <summary>
        /// Gets or sets the Last Name. Last Name
        /// </summary>
        /// <value>The Last Name.</value>
		public String LastName { get; set; }

		/// <summary>
        /// Gets or sets the Email. Email
        /// </summary>
        /// <value>The Email.</value>
		public String Email { get; set; }

		/// <summary>
        /// Gets or sets the Login. Login
        /// </summary>
        /// <value>The Login.</value>
		public String Login { get; set; }

		/// <summary>
        /// Gets or sets the Password. Password
        /// </summary>
        /// <value>The Password.</value>
		public String Password { get; set; }

		/// <summary>
        /// Gets or sets the Create Date. Create Date
        /// </summary>
        /// <value>The Create Date.</value>
		public DateTime? CreateDate { get; set; }

		/// <summary>
        /// Gets or sets the Modify Date. Modify Date
        /// </summary>
        /// <value>The Modify Date.</value>
		public DateTime? ModifyDate { get; set; }

		/// <summary>
        /// Gets or sets the Delete Date. Delete Date
        /// </summary>
        /// <value>The Delete Date.</value>
		public DateTime? DeleteDate { get; set; }

		/// <summary>
        /// Gets or sets the Is Active. Is Active
        /// </summary>
        /// <value>The Is Active.</value>
		public Boolean? IsActive { get; set; }

		/// <summary>
        /// Gets or sets the Is Administrator. Is Administrator
        /// </summary>
        /// <value>The Is Administrator.</value>
		public Boolean? IsAdministrator { get; set; }

		/// <summary>
        /// Gets or sets the Skills. 
        /// </summary>
        /// <value>The Skills.</value>
		public String Skills { get; set; }

		/// <summary>
        /// Gets or sets the Active Directory Name. Active Directory Name
        /// </summary>
        /// <value>The Active Directory Name.</value>
		public String ActiveDirectoryName { get; set; }

		/// <summary>
        /// Gets or sets the Weekly Available Hours. Weekly Available Hours
        /// </summary>
        /// <value>The Weekly Available Hours.</value>
		public Decimal? WeeklyAvailableHours { get; set; }

		/// <summary>
        /// Gets or sets the Current Allocation. Current Allocation
        /// </summary>
        /// <value>The Current Allocation.</value>
		public Int32? CurrentAllocation { get; set; }

		/// <summary>
        /// Gets or sets the Current Available Hours. Current Available Hours
        /// </summary>
        /// <value>The Current Available Hours.</value>
		public Decimal? CurrentAvailableHours { get; set; }

		/// <summary>
        /// Gets or sets the Available From. Available From
        /// </summary>
        /// <value>The Available From.</value>
		public DateTime? AvailableFrom { get; set; }

		/// <summary>
        /// Gets or sets the Available Future Allocation. Available Future Allocation
        /// </summary>
        /// <value>The Available Future Allocation.</value>
		public Int32? AvailableFutureAllocation { get; set; }

		/// <summary>
        /// Gets or sets the Available Future Hours. Available Future Hours
        /// </summary>
        /// <value>The Available Future Hours.</value>
		public Decimal? AvailableFutureHours { get; set; }

		/// <summary>
        /// Gets or sets the Is Observer. Is Observer
        /// </summary>
        /// <value>The Is Observer.</value>
		public Boolean? IsObserver { get; set; }
		
		/// <summary>
        /// Gets or sets the Default Role ID. Default Role
        /// </summary>
        /// <value>The Default Role ID.</value>
		[ForeignKey]
		public Int32? RoleID { get; set; }
		

		
		/// <summary>
        /// Gets or sets the Default Role Name. Default Role
        /// </summary>
        /// <value>The Default Role Name.</value>
		[RelationName]
		public virtual string DefaultRoleName { get; set; }
		
	}
	
	
	/// <summary>
    /// User fields
    /// </summary>
	public enum UserField
	{
        /// <summary>
        /// First Name
        /// </summary>		
		FirstName,
        /// <summary>
        /// Last Name
        /// </summary>		
		LastName,
        /// <summary>
        /// Email
        /// </summary>		
		Email,
        /// <summary>
        /// Login
        /// </summary>		
		Login,
        /// <summary>
        /// Password
        /// </summary>		
		Password,
        /// <summary>
        /// Create Date
        /// </summary>		
		CreateDate,
        /// <summary>
        /// Modify Date
        /// </summary>		
		ModifyDate,
        /// <summary>
        /// Delete Date
        /// </summary>		
		DeleteDate,
        /// <summary>
        /// Is Active
        /// </summary>		
		IsActive,
        /// <summary>
        /// Is Administrator
        /// </summary>		
		IsAdministrator,
        /// <summary>
        /// Skills
        /// </summary>		
		Skills,
        /// <summary>
        /// Active Directory Name
        /// </summary>		
		ActiveDirectoryName,
        /// <summary>
        /// Weekly Available Hours
        /// </summary>		
		WeeklyAvailableHours,
        /// <summary>
        /// Current Allocation
        /// </summary>		
		CurrentAllocation,
        /// <summary>
        /// Current Available Hours
        /// </summary>		
		CurrentAvailableHours,
        /// <summary>
        /// Available From
        /// </summary>		
		AvailableFrom,
        /// <summary>
        /// Available Future Allocation
        /// </summary>		
		AvailableFutureAllocation,
        /// <summary>
        /// Available Future Hours
        /// </summary>		
		AvailableFutureHours,
        /// <summary>
        /// Is Observer
        /// </summary>		
		IsObserver,
        /// <summary>
        /// Role ID
        /// </summary>		
		RoleID,
        /// <summary>
        /// Default Role Name
        /// </summary>		
		DefaultRoleName,
	}
}