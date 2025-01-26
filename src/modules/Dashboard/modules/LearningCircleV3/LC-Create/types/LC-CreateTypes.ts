export interface InterestGroup {
    id: string;
    name: string;
  }
  
  export interface ApiResponse {
    hasError: boolean;
    statusCode: number;
    message: {
      general: string[];
    };
    response: {
      aois: InterestGroup[];
    };
  }
   