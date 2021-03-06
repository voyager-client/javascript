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





/**
* The V1beta1TLSAuth model module.
* @module com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1TLSAuth
* @version 1.0-SNAPSHOT
*/
export default class V1beta1TLSAuth {
    /**
    * Constructs a new <code>V1beta1TLSAuth</code>.
    * @alias module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1TLSAuth
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1TLSAuth</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1TLSAuth} obj Optional instance to populate.
    * @return {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1TLSAuth} The populated <code>V1beta1TLSAuth</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1TLSAuth();

            
            
            

            if (data.hasOwnProperty('errorPage')) {
                obj['errorPage'] = ApiClient.convertToType(data['errorPage'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('secretName')) {
                obj['secretName'] = ApiClient.convertToType(data['secretName'], 'String');
            }
            if (data.hasOwnProperty('verifyClient')) {
                obj['verifyClient'] = ApiClient.convertToType(data['verifyClient'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} errorPage
    */
    errorPage = undefined;
    /**
    * @member {Object.<String, String>} headers
    */
    headers = undefined;
    /**
    * @member {String} secretName
    */
    secretName = undefined;
    /**
    * @member {String} verifyClient
    */
    verifyClient = undefined;








}


