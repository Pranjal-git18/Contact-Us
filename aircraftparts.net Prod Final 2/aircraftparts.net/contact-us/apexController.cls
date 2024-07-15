@RestResource(urlMapping='/partNumber')
global with sharing class apexController {
   @HttpGet
   global static List<Product2> getPartNumbers() {
        List<Product2> partNumbers = [SELECT Id,Name FROM Product2];
        return partNumbers;
    }
}