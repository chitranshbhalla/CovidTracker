import RegisterModelGenerated from "./generated/RegisterModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = RegisterModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await RegisterModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...RegisterModelGenerated,
  ...customModel
};
