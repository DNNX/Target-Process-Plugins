// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using Tp.Testing.Core;

namespace Tp.SourceControl.Testing.Repository.Git
{
	public class GitTestRepository : VcsTestRepository<GitTestRepository>
	{
		protected override string Name
		{
			get { return "TestRepository"; }
		}

	}
}