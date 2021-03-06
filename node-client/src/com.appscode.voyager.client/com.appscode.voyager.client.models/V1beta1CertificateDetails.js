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
import V1Time from './V1Time';





/**
* The V1beta1CertificateDetails model module.
* @module com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateDetails
* @version 1.0-SNAPSHOT
*/
export default class V1beta1CertificateDetails {
    /**
    * Constructs a new <code>V1beta1CertificateDetails</code>.
    * @alias module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateDetails
    * @class
    * @param certStableURL {String} 
    * @param certURL {String} 
    */

    constructor(certStableURL, certURL) {
        

        
        

        this['certStableURL'] = certStableURL;this['certURL'] = certURL;

        
    }

    /**
    * Constructs a <code>V1beta1CertificateDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateDetails} obj Optional instance to populate.
    * @return {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateDetails} The populated <code>V1beta1CertificateDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1CertificateDetails();

            
            
            

            if (data.hasOwnProperty('accountRef')) {
                obj['accountRef'] = ApiClient.convertToType(data['accountRef'], 'String');
            }
            if (data.hasOwnProperty('certStableURL')) {
                obj['certStableURL'] = ApiClient.convertToType(data['certStableURL'], 'String');
            }
            if (data.hasOwnProperty('certURL')) {
                obj['certURL'] = ApiClient.convertToType(data['certURL'], 'String');
            }
            if (data.hasOwnProperty('notAfter')) {
                obj['notAfter'] = V1Time.constructFromObject(data['notAfter']);
            }
            if (data.hasOwnProperty('notBefore')) {
                obj['notBefore'] = V1Time.constructFromObject(data['notBefore']);
            }
            if (data.hasOwnProperty('serialNumber')) {
                obj['serialNumber'] = ApiClient.convertToType(data['serialNumber'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} accountRef
    */
    accountRef = undefined;
    /**
    * @member {String} certStableURL
    */
    certStableURL = undefined;
    /**
    * @member {String} certURL
    */
    certURL = undefined;
    /**
    * @member {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1Time} notAfter
    */
    notAfter = undefined;
    /**
    * @member {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1Time} notBefore
    */
    notBefore = undefined;
    /**
    * @member {String} serialNumber
    */
    serialNumber = undefined;








}


