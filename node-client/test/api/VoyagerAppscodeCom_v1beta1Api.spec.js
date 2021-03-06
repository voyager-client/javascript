/**
 * voyager-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * Contact: hello@appscode.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VoyagerJsClient);
  }
}(this, function(expect, VoyagerJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VoyagerJsClient.VoyagerAppscodeCom_v1beta1Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VoyagerAppscodeCom_v1beta1Api', function() {
    describe('createNamespacedCertificate', function() {
      it('should call createNamespacedCertificate successfully', function(done) {
        //uncomment below and update the code to test createNamespacedCertificate
        //instance.createNamespacedCertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNamespacedIngress', function() {
      it('should call createNamespacedIngress successfully', function(done) {
        //uncomment below and update the code to test createNamespacedIngress
        //instance.createNamespacedIngress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedCertificate', function() {
      it('should call deleteCollectionNamespacedCertificate successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedCertificate
        //instance.deleteCollectionNamespacedCertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedIngress', function() {
      it('should call deleteCollectionNamespacedIngress successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedIngress
        //instance.deleteCollectionNamespacedIngress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedCertificate', function() {
      it('should call deleteNamespacedCertificate successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedCertificate
        //instance.deleteNamespacedCertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedIngress', function() {
      it('should call deleteNamespacedIngress successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedIngress
        //instance.deleteNamespacedIngress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPIResources', function() {
      it('should call getAPIResources successfully', function(done) {
        //uncomment below and update the code to test getAPIResources
        //instance.getAPIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listCertificateForAllNamespaces', function() {
      it('should call listCertificateForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listCertificateForAllNamespaces
        //instance.listCertificateForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listIngressForAllNamespaces', function() {
      it('should call listIngressForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listIngressForAllNamespaces
        //instance.listIngressForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedCertificate', function() {
      it('should call listNamespacedCertificate successfully', function(done) {
        //uncomment below and update the code to test listNamespacedCertificate
        //instance.listNamespacedCertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedIngress', function() {
      it('should call listNamespacedIngress successfully', function(done) {
        //uncomment below and update the code to test listNamespacedIngress
        //instance.listNamespacedIngress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedCertificate', function() {
      it('should call patchNamespacedCertificate successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedCertificate
        //instance.patchNamespacedCertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedIngress', function() {
      it('should call patchNamespacedIngress successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedIngress
        //instance.patchNamespacedIngress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedCertificate', function() {
      it('should call readNamespacedCertificate successfully', function(done) {
        //uncomment below and update the code to test readNamespacedCertificate
        //instance.readNamespacedCertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedIngress', function() {
      it('should call readNamespacedIngress successfully', function(done) {
        //uncomment below and update the code to test readNamespacedIngress
        //instance.readNamespacedIngress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedCertificate', function() {
      it('should call replaceNamespacedCertificate successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedCertificate
        //instance.replaceNamespacedCertificate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedIngress', function() {
      it('should call replaceNamespacedIngress successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedIngress
        //instance.replaceNamespacedIngress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
