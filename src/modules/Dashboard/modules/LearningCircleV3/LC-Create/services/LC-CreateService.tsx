import { reqInstance } from "../../../services/baseReqInstance";
import { InterestGroupRoutes } from "../../../services/dasboardEndpoints";
import { ApiResponse } from "../types/LC-CreateTypes";
  
export const getInterestGroups = async () : Promise<ApiResponse|null> =>{
    try {
        const response = await reqInstance.get(InterestGroupRoutes.listAllInterestGroups);
        if(response.data){
            return response.data;
        }else{
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}