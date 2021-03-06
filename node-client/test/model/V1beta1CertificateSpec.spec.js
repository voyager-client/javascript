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
    instance = new VoyagerJsClient.V1beta1CertificateSpec();
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

  describe('V1beta1CertificateSpec', function() {
    it('should create an instance of V1beta1CertificateSpec', function() {
      // uncomment below and update the code to test V1beta1CertificateSpec
      //var instane = new VoyagerJsClient.V1beta1CertificateSpec();
      //expect(instance).to.be.a(VoyagerJsClient.V1beta1CertificateSpec);
    });

    it('should have the property acmeStagingURL (base name: "acmeStagingURL")', function() {
      // uncomment below and update the code to test the property acmeStagingURL
      //var instane = new VoyagerJsClient.V1beta1CertificateSpec();
      //expect(instance).to.be();
    });

    it('should have the property acmeUserSecretName (base name: "acmeUserSecretName")', function() {
      // uncomment below and update the code to test the property acmeUserSecretName
      //var instane = new VoyagerJsClient.V1beta1CertificateSpec();
      //expect(instance).to.be();
    });

    it('should have the property challengeProvider (base name: "challengeProvider")', function() {
      // uncomment below and update the code to test the property challengeProvider
      //var instane = new VoyagerJsClient.V1beta1CertificateSpec();
      //expect(instance).to.be();
    });

    it('should have the property domains (base name: "domains")', function() {
      // uncomment below and update the code to test the property domains
      //var instane = new VoyagerJsClient.V1beta1CertificateSpec();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new VoyagerJsClient.V1beta1CertificateSpec();
      //expect(instance).to.be();
    });

    it('should have the property httpProviderIngressReference (base name: "httpProviderIngressReference")', function() {
      // uncomment below and update the code to test the property httpProviderIngressReference
      //var instane = new VoyagerJsClient.V1beta1CertificateSpec();
      //expect(instance).to.be();
    });

    it('should have the property provider (base name: "provider")', function() {
      // uncomment below and update the code to test the property provider
      //var instane = new VoyagerJsClient.V1beta1CertificateSpec();
      //expect(instance).to.be();
    });

    it('should have the property providerCredentialSecretName (base name: "providerCredentialSecretName")', function() {
      // uncomment below and update the code to test the property providerCredentialSecretName
      //var instane = new VoyagerJsClient.V1beta1CertificateSpec();
      //expect(instance).to.be();
    });

    it('should have the property storage (base name: "storage")', function() {
      // uncomment below and update the code to test the property storage
      //var instane = new VoyagerJsClient.V1beta1CertificateSpec();
      //expect(instance).to.be();
    });

  });

}));
