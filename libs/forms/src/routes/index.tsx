import React from 'react';
import { Route } from 'react-router-dom';

const SimpleForm = React.lazy(() => import('../views/simple-form/simple-form'));
const DynamicForm = React.lazy(
  () => import('../views/dynamic-form/dynamic-form')
);

export const formRoutes = [
  <Route key="simple-form" path="/simple-forms" element={<SimpleForm />} />,
  <Route key="dynamic-form" path="/dynamic-forms" element={<DynamicForm />} />,
];
