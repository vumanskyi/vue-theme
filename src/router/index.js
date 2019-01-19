import Vue from 'vue';
import Router from 'vue-router';
import dashboard from '@/components/pages/dashboard';
import widjets from '@/components/pages/widjets';
import charts from '@/components/pages/charts';
import ui_elements from '@/components/pages/ui_elements';

// some component

Vue.use(Router);

export default new Router ({
     routes: [
         {
             path: '/',
             name: 'dashboard',
             component: dashboard
         },
         {
             path: '/dashboard',
             name: 'dashboard',
             component: dashboard
         },
         {
             path: '/widjets',
             name: 'widjets',
             component: widjets
         },
         {
             path: '/charts',
             name: 'charts',
             component: charts
         },
         {
             path: '/ui_elements',
             name: 'ui_elements',
             component: ui_elements
         }
     ]
});
