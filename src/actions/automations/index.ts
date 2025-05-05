"use server";

import { onCurrentUser } from "../user";
import { createAutomation, getAutomations } from "./query";

export const createAutomations = async (id? : string) => {
    const user = await onCurrentUser();
  
    try {
      const create = await createAutomation(user.id, id);
      if(create) return { status: 200, data: 'Automation create' };
  
      return { status: 404, data: 'Something Went Wrong' };
    } catch (error: any) {
      return { status: 500, data: [] };
    }
  };

  export const getAllAutomations = async () => {
    const user = await onCurrentUser();
  
    try {
      const getAll = await getAutomations(user.id);
  
      if (getAll) return { status: 200, data: getAll.automations || [] };
  
      return { status: 404, data: [] };
    } catch (error: any) {
      return { status: 500, data: [] };
    }
  };