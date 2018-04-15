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
    instance = new VoyagerJsClient.V1beta1IngressSpec();
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

  describe('V1beta1IngressSpec', function() {
    it('should create an instance of V1beta1IngressSpec', function() {
      // uncomment below and update the code to test V1beta1IngressSpec
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be.a(VoyagerJsClient.V1beta1IngressSpec);
    });

    it('should have the property affinity (base name: "affinity")', function() {
      // uncomment below and update the code to test the property affinity
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property backend (base name: "backend")', function() {
      // uncomment below and update the code to test the property backend
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property externalIPs (base name: "externalIPs")', function() {
      // uncomment below and update the code to test the property externalIPs
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property frontendRules (base name: "frontendRules")', function() {
      // uncomment below and update the code to test the property frontendRules
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property imagePullSecrets (base name: "imagePullSecrets")', function() {
      // uncomment below and update the code to test the property imagePullSecrets
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property loadBalancerSourceRanges (base name: "loadBalancerSourceRanges")', function() {
      // uncomment below and update the code to test the property loadBalancerSourceRanges
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property nodeSelector (base name: "nodeSelector")', function() {
      // uncomment below and update the code to test the property nodeSelector
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property rules (base name: "rules")', function() {
      // uncomment below and update the code to test the property rules
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property schedulerName (base name: "schedulerName")', function() {
      // uncomment below and update the code to test the property schedulerName
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property tls (base name: "tls")', function() {
      // uncomment below and update the code to test the property tls
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

    it('should have the property tolerations (base name: "tolerations")', function() {
      // uncomment below and update the code to test the property tolerations
      //var instane = new VoyagerJsClient.V1beta1IngressSpec();
      //expect(instance).to.be();
    });

  });

}));