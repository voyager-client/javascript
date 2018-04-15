# VoyagerJsClient.VoyagerAppscodeComApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAPIGroup**](VoyagerAppscodeComApi.md#getAPIGroup) | **GET** /apis/voyager.appscode.com/ | 


<a name="getAPIGroup"></a>
# **getAPIGroup**
> V1APIGroup getAPIGroup()



get information of a group

### Example
```javascript
import VoyagerJsClient from 'voyager-js-client';

let apiInstance = new VoyagerJsClient.VoyagerAppscodeComApi();

apiInstance.getAPIGroup((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V1APIGroup**](V1APIGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/yaml, application/vnd.kubernetes.protobuf
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

