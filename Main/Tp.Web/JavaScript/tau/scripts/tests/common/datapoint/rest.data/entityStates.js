define(["Underscore"],function(a){return{getEntityStates:function(){var a=[{id:1,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:4,name:"UserStory",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:2,__type:"entityState"}],__type:"entityState"},{id:2,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:4,name:"UserStory",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:null,nextStates:[{id:1,__type:"entityState"}],__type:"entityState"},{id:3,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:5,name:"Task",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:4,__type:"entityState"}],__type:"entityState"},{id:4,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:5,name:"Task",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:null,nextStates:[{id:3,__type:"entityState"}],__type:"entityState"},{id:5,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:6,__type:"entityState"},{id:7,__type:"entityState"}],__type:"entityState"},{id:6,name:"Fixed",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:{id:9,__type:"role"},nextStates:[{id:5,__type:"entityState"},{id:8,__type:"entityState"}],__type:"entityState"},{id:7,name:"Invalid",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!0,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:{id:9,__type:"role"},nextStates:[{id:5,__type:"entityState"},{id:8,__type:"entityState"}],__type:"entityState"},{id:8,name:"Closed",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:null,nextStates:[],__type:"entityState"},{id:9,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:14,name:"TestPlanRun",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:{id:9,__type:"role"},nextStates:[{id:10,__type:"entityState"}],__type:"entityState"},{id:10,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:14,name:"TestPlanRun",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:null,nextStates:[{id:9,__type:"entityState"}],__type:"entityState"},{id:15,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:16,name:"Impediment",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:null,nextStates:[{id:16,__type:"entityState"}],__type:"entityState"},{id:16,name:"Resolved",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:16,name:"Impediment",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:null,nextStates:[{id:15,__type:"entityState"}],__type:"entityState"},{id:17,name:"New",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:17,name:"Request",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:18,__type:"entityState"},{id:19,__type:"entityState"}],__type:"entityState"},{id:18,name:"Active",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:17,name:"Request",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:19,__type:"entityState"}],__type:"entityState"},{id:19,name:"Closed",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:17,name:"Request",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:null,nextStates:[{id:18,__type:"entityState"}],__type:"entityState"},{id:20,name:"New",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:9,name:"Feature",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:21,__type:"entityState"},{id:22,__type:"entityState"}],__type:"entityState"},{id:21,name:"In Progress",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:9,name:"Feature",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:20,__type:"entityState"},{id:22,__type:"entityState"}],__type:"entityState"},{id:22,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:9,name:"Feature",__type:"entityType"},process:{id:1,name:"All Practices",__type:"process"},role:null,nextStates:[{id:20,__type:"entityState"},{id:21,__type:"entityState"}],__type:"entityState"},{id:23,name:"Backlog",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:4,name:"UserStory",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:null,nextStates:[{id:39,__type:"entityState"}],__type:"entityState"},{id:39,name:"Planned",isInitial:!1,isFinal:!1,isPlanned:!0,isCommentRequired:!1,entityType:{id:4,name:"UserStory",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:23,__type:"entityState"},{id:40,__type:"entityState"}],__type:"entityState"},{id:24,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:4,name:"UserStory",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:null,nextStates:[{id:40,__type:"entityState"},{id:41,__type:"entityState"}],__type:"entityState"},{id:40,name:"In Progress",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:4,name:"UserStory",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:23,__type:"entityState"},{id:24,__type:"entityState"},{id:39,__type:"entityState"},{id:41,__type:"entityState"}],__type:"entityState"},{id:41,name:"In Testing",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:4,name:"UserStory",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:9,__type:"role"},nextStates:[{id:24,__type:"entityState"},{id:40,__type:"entityState"}],__type:"entityState"},{id:25,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:5,name:"Task",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:26,__type:"entityState"}],__type:"entityState"},{id:26,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:5,name:"Task",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:null,nextStates:[{id:25,__type:"entityState"}],__type:"entityState"},{id:27,name:"Backlog",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:null,nextStates:[{id:42,__type:"entityState"}],__type:"entityState"},{id:42,name:"Planned",isInitial:!1,isFinal:!1,isPlanned:!0,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:27,__type:"entityState"},{id:43,__type:"entityState"}],__type:"entityState"},{id:28,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:null,nextStates:[{id:43,__type:"entityState"},{id:44,__type:"entityState"}],__type:"entityState"},{id:43,name:"In Progress",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:27,__type:"entityState"},{id:28,__type:"entityState"},{id:42,__type:"entityState"},{id:44,__type:"entityState"}],__type:"entityState"},{id:44,name:"In Testing",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:9,__type:"role"},nextStates:[{id:28,__type:"entityState"},{id:43,__type:"entityState"}],__type:"entityState"},{id:29,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:14,name:"TestPlanRun",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:9,__type:"role"},nextStates:[{id:30,__type:"entityState"}],__type:"entityState"},{id:30,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:14,name:"TestPlanRun",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:null,nextStates:[{id:29,__type:"entityState"}],__type:"entityState"},{id:31,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:16,name:"Impediment",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:null,nextStates:[{id:32,__type:"entityState"}],__type:"entityState"},{id:32,name:"Resolved",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:16,name:"Impediment",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:null,nextStates:[{id:31,__type:"entityState"}],__type:"entityState"},{id:33,name:"New",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:17,name:"Request",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:34,__type:"entityState"},{id:35,__type:"entityState"}],__type:"entityState"},{id:34,name:"Active",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:17,name:"Request",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:35,__type:"entityState"}],__type:"entityState"},{id:35,name:"Closed",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:17,name:"Request",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:null,nextStates:[{id:34,__type:"entityState"}],__type:"entityState"},{id:36,name:"New",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:9,name:"Feature",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:37,__type:"entityState"},{id:38,__type:"entityState"}],__type:"entityState"},{id:37,name:"In Progress",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:9,name:"Feature",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:36,__type:"entityState"},{id:38,__type:"entityState"}],__type:"entityState"},{id:38,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:9,name:"Feature",__type:"entityType"},process:{id:2,name:"Kanban",__type:"process"},role:null,nextStates:[{id:36,__type:"entityState"},{id:37,__type:"entityState"}],__type:"entityState"},{id:45,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:4,name:"UserStory",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:null,nextStates:[{id:46,__type:"entityState"},{id:47,__type:"entityState"}],__type:"entityState"},{id:46,name:"In Progress",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:4,name:"UserStory",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:45,__type:"entityState"},{id:47,__type:"entityState"}],__type:"entityState"},{id:47,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:4,name:"UserStory",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:null,nextStates:[{id:45,__type:"entityState"},{id:46,__type:"entityState"}],__type:"entityState"},{id:48,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:5,name:"Task",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:49,__type:"entityState"},{id:50,__type:"entityState"}],__type:"entityState"},{id:49,name:"In Progress",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:5,name:"Task",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:48,__type:"entityState"},{id:50,__type:"entityState"}],__type:"entityState"},{id:50,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:5,name:"Task",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:null,nextStates:[{id:48,__type:"entityState"},{id:49,__type:"entityState"}],__type:"entityState"},{id:51,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:1,__type:"role"},nextStates:[{id:52,__type:"entityState"},{id:53,__type:"entityState"}],__type:"entityState"},{id:52,name:"Fixed",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:9,__type:"role"},nextStates:[{id:51,__type:"entityState"},{id:54,__type:"entityState"}],__type:"entityState"},{id:53,name:"Invalid",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:9,__type:"role"},nextStates:[{id:51,__type:"entityState"},{id:54,__type:"entityState"}],__type:"entityState"},{id:54,name:"Closed",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:8,name:"Bug",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:null,nextStates:[{id:51,__type:"entityState"}],__type:"entityState"},{id:55,name:"New",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:9,name:"Feature",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:56,__type:"entityState"},{id:57,__type:"entityState"}],__type:"entityState"},{id:56,name:"In Progress",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:9,name:"Feature",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:55,__type:"entityState"},{id:57,__type:"entityState"}],__type:"entityState"},{id:57,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:9,name:"Feature",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:null,nextStates:[{id:55,__type:"entityState"},{id:56,__type:"entityState"}],__type:"entityState"},{id:58,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:14,name:"TestPlanRun",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:9,__type:"role"},nextStates:[{id:59,__type:"entityState"}],__type:"entityState"},{id:59,name:"Done",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:14,name:"TestPlanRun",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:null,nextStates:[{id:58,__type:"entityState"}],__type:"entityState"},{id:60,name:"Open",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:16,name:"Impediment",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:null,nextStates:[{id:61,__type:"entityState"}],__type:"entityState"},{id:61,name:"Resolved",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:16,name:"Impediment",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:null,nextStates:[{id:60,__type:"entityState"}],__type:"entityState"},{id:62,name:"New",isInitial:!0,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:17,name:"Request",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:63,__type:"entityState"},{id:64,__type:"entityState"}],__type:"entityState"},{id:63,name:"Active",isInitial:!1,isFinal:!1,isPlanned:!1,isCommentRequired:!1,entityType:{id:17,name:"Request",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:{id:6,__type:"role"},nextStates:[{id:64,__type:"entityState"}],__type:"entityState"},{id:64,name:"Closed",isInitial:!1,isFinal:!0,isPlanned:!1,isCommentRequired:!1,entityType:{id:17,name:"Request",__type:"entityType"},process:{id:3,name:"Scrum",__type:"process"},role:null,nextStates:[{id:63,__type:"entityState"}],__type:"entityState"}];return a}}})