require(["all.components"],function(){require(["tp/reports/report.tp2","jQuery","tau/configurator"],function(initReport,$,configurator){$(function(){initReport("tp/reports/relationsNetwork/component.report");var navigator=configurator.service("navigator");$("#reports-container").delegate(".tau-id","click",function(e){e.stopPropagation(),e.preventDefault(),navigator.to(this.href.substr(this.href.indexOf("#")+1))})})})})