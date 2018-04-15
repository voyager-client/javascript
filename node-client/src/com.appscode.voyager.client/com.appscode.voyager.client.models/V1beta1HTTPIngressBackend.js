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


import ApiClient from '../ApiClient';
import IntstrIntOrString from './IntstrIntOrString';





/**
* The V1beta1HTTPIngressBackend model module.
* @module com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressBackend
* @version 1.0-SNAPSHOT
*/
export default class V1beta1HTTPIngressBackend {
    /**
    * Constructs a new <code>V1beta1HTTPIngressBackend</code>.
    * @alias module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressBackend
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1HTTPIngressBackend</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressBackend} obj Optional instance to populate.
    * @return {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressBackend} The populated <code>V1beta1HTTPIngressBackend</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1HTTPIngressBackend();

            
            
            

            if (data.hasOwnProperty('backendRules')) {
                obj['backendRules'] = ApiClient.convertToType(data['backendRules'], ['String']);
            }
            if (data.hasOwnProperty('headerRules')) {
                obj['headerRules'] = ApiClient.convertToType(data['headerRules'], ['String']);
            }
            if (data.hasOwnProperty('hostNames')) {
                obj['hostNames'] = ApiClient.convertToType(data['hostNames'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rewriteRules')) {
                obj['rewriteRules'] = ApiClient.convertToType(data['rewriteRules'], ['String']);
            }
            if (data.hasOwnProperty('serviceName')) {
                obj['serviceName'] = ApiClient.convertToType(data['serviceName'], 'String');
            }
            if (data.hasOwnProperty('servicePort')) {
                obj['servicePort'] = IntstrIntOrString.constructFromObject(data['servicePort']);
            }
        }
        return obj;
    }

    /**
    * Serialized HAProxy rules to apply on server backend including request, response or header rewrite. acls also can be used. https://cbonte.github.io/haproxy-dconv/1.7/configuration.html#1
    * @member {Array.<String>} backendRules
    */
    backendRules = undefined;
    /**
    * Header rules to modifies the header.  Deprecated: Use backendRule, will be removed.
    * @member {Array.<String>} headerRules
    */
    headerRules = undefined;
    /**
    * Host names to forward traffic to. If empty traffic will be forwarded to all subsets instance. If set only matched hosts will get the traffic. This is an handy way to send traffic to Specific StatefulSet pod. IE. Setting [web-0] will send traffic to only web-0 host for this StatefulSet, https://kubernetes.io/docs/tasks/stateful-application/basic-stateful-set/#creating-a-statefulset
    * @member {Array.<String>} hostNames
    */
    hostNames = undefined;
    /**
    * User can specify backend name for using it with custom acl Otherwise it will be generated
    * @member {String} name
    */
    name = undefined;
    /**
    * Path rewrite rules with haproxy formatted regex.  Deprecated: Use backendRule, will be removed.
    * @member {Array.<String>} rewriteRules
    */
    rewriteRules = undefined;
    /**
    * Specifies the name of the referenced service.
    * @member {String} serviceName
    */
    serviceName = undefined;
    /**
    * Specifies the port of the referenced service.
    * @member {module:com.appscode.voyager.client/com.appscode.voyager.client.models/IntstrIntOrString} servicePort
    */
    servicePort = undefined;








}

