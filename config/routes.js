/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
 
 //   '/': { view: 'pages/auth/login', locals: { layout: 'layouts/auth'} },
  
  /* LOADING */

  /* POKEDEX */
  '/pokedex': { view: 'pages/pokedex/pokedex', locals: { layout: 'layouts/layout'} },
  '/pokedex/detail': { view: 'pages/pokedex/pokedex-detail', locals: { layout: 'layouts/layout'} },

  /* MOVIMIENTOS */
  '/movimientos': { view: 'pages/moves/moves', locals: { layout: 'layouts/layout'} },
  
  '/loader': { view: 'pages/loader/loader', locals: { layout: 'layouts/layout'} },



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
