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
import V1beta1ACMECertificateDetails from './V1beta1ACMECertificateDetails';
import V1beta1CertificateCondition from './V1beta1CertificateCondition';
import V1beta1CertificateDetails from './V1beta1CertificateDetails';





/**
* The V1beta1CertificateStatus model module.
* @module com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateStatus
* @version 1.0-SNAPSHOT
*/
export default class V1beta1CertificateStatus {
    /**
    * Constructs a new <code>V1beta1CertificateStatus</code>.
    * @alias module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateStatus
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1CertificateStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateStatus} obj Optional instance to populate.
    * @return {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateStatus} The populated <code>V1beta1CertificateStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1CertificateStatus();

            
            
            

            if (data.hasOwnProperty('acmeUserSecretName')) {
                obj['acmeUserSecretName'] = ApiClient.convertToType(data['acmeUserSecretName'], 'String');
            }
            if (data.hasOwnProperty('certificateObtained')) {
                obj['certificateObtained'] = ApiClient.convertToType(data['certificateObtained'], 'Boolean');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [V1beta1CertificateCondition]);
            }
            if (data.hasOwnProperty('creationTime')) {
                obj['creationTime'] = V1Time.constructFromObject(data['creationTime']);
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = V1beta1ACMECertificateDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('lastIssuedCertificate')) {
                obj['lastIssuedCertificate'] = V1beta1CertificateDetails.constructFromObject(data['lastIssuedCertificate']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
    * Deprecated
    * @member {String} acmeUserSecretName
    */
    acmeUserSecretName = undefined;
    /**
    * Deprecated
    * @member {Boolean} certificateObtained
    */
    certificateObtained = undefined;
    /**
    * @member {Array.<module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateCondition>} conditions
    */
    conditions = undefined;
    /**
    * @member {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1Time} creationTime
    */
    creationTime = undefined;
    /**
    * Deprecated
    * @member {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1ACMECertificateDetails} details
    */
    details = undefined;
    /**
    * @member {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateDetails} lastIssuedCertificate
    */
    lastIssuedCertificate = undefined;
    /**
    * Deprecated
    * @member {String} message
    */
    message = undefined;








}


