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
* The V1beta1BasicAuth model module.
* @module com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1BasicAuth
* @version 1.0-SNAPSHOT
*/
export default class V1beta1BasicAuth {
    /**
    * Constructs a new <code>V1beta1BasicAuth</code>.
    * @alias module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1BasicAuth
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1BasicAuth</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1BasicAuth} obj Optional instance to populate.
    * @return {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1BasicAuth} The populated <code>V1beta1BasicAuth</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1BasicAuth();

            
            
            

            if (data.hasOwnProperty('realm')) {
                obj['realm'] = ApiClient.convertToType(data['realm'], 'String');
            }
            if (data.hasOwnProperty('secretName')) {
                obj['secretName'] = ApiClient.convertToType(data['secretName'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} realm
    */
    realm = undefined;
    /**
    * @member {String} secretName
    */
    secretName = undefined;








}


