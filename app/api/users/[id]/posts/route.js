import { connectToDB } from "@utils/database";
import Prompt from "@models/prompts";
export const GET = async (request, {params}) => {
    try { 
        await connectToDB();
        const prompts = await Prompt.find({creator: params.id}).populate('creator');
        console.log(prompts);
        return new Response(JSON.stringify(prompts), {
            status: 200 })
    } catch (error) {
        console.log(error);
        return new Response("Failed", {status: 500});
    }
} 