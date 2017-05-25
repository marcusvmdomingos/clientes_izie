angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.meusClientes'
      2) Using $state.go programatically:
        $state.go('tabsController.meusClientes');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/meus-clientes
      /page1/tab1/meus-clientes
      /page1/tab2/meus-clientes
  */
  .state('tabsController.meusClientes', {
    url: '/meus-clientes',
    views: {
      'tab3': {
        templateUrl: 'templates/meusClientes.html',
        controller: 'meusClientesCtrl'
      },
      'tab1': {
        templateUrl: 'templates/meusClientes.html',
        controller: 'meusClientesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/meusClientes.html',
        controller: 'meusClientesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.novoCliente'
      2) Using $state.go programatically:
        $state.go('tabsController.novoCliente');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/novo-cliente
      /page1/tab1/novo-cliente
      /page1/tab2/novo-cliente
  */
  .state('tabsController.novoCliente', {
    url: '/novo-cliente',
    views: {
      'tab3': {
        templateUrl: 'templates/novoCliente.html',
        controller: 'novoClienteCtrl'
      },
      'tab1': {
        templateUrl: 'templates/novoCliente.html',
        controller: 'novoClienteCtrl'
      },
      'tab2': {
        templateUrl: 'templates/novoCliente.html',
        controller: 'novoClienteCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/home',
    views: {
      'tab3': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.confirmacao'
      2) Using $state.go programatically:
        $state.go('tabsController.confirmacao');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/confirmacao
      /page1/tab1/confirmacao
      /page1/tab2/confirmacao
  */
  .state('tabsController.confirmacao', {
    url: '/confirmacao',
    views: {
      'tab3': {
        templateUrl: 'templates/confirmacao.html',
        controller: 'confirmacaoCtrl'
      },
      'tab1': {
        templateUrl: 'templates/confirmacao.html',
        controller: 'confirmacaoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/confirmacao.html',
        controller: 'confirmacaoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.detalheCliente'
      2) Using $state.go programatically:
        $state.go('tabsController.detalheCliente');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab3/detalhe
      /page1/tab1/detalhe
      /page1/tab2/detalhe
  */
  .state('tabsController.detalheCliente', {
    url: '/detalhe',
    views: {
      'tab3': {
        templateUrl: 'templates/detalheCliente.html',
        controller: 'novoClienteCtrl'
      },
      'tab1': {
        templateUrl: 'templates/detalheCliente.html',
        controller: 'novoClienteCtrl'
      },
      'tab2': {
        templateUrl: 'templates/detalheCliente.html',
        controller: 'novoClienteCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/home')


});