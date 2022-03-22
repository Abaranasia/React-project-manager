import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Dashboard } from './views/Dashboard/Dashboard';
import { Project } from './views/ProjectDetail/Project';
import { ProjectList } from './views/ProjectList/ProjectList';
import { Resource } from './views/ResourceDetail/Resource';
import { Resources } from './views/Resources/Resources';

export const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/projects" component={ProjectList} exact />
      <Route path="/project" component={Project} exact />
      <Route path="/resources" component={Resources} exact />
      <Route path="/resource" component={Resource} exact />
      <Redirect from='*' to='/dashboard' />
    </Switch>
  )
}
