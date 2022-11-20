import {MyData} from "./MyData";
import {SocialNetworks} from "./SocialNetworks";
import {ExtraKnowledge} from "./ExtraKnowledge";
import {ListProject} from "./project/ListProject";
import {ProgrammingLanguage} from "./ProgrammingLanguage";
import {ProgrammingTools} from "./ProgrammingTools";
import {UseMyData} from "../Use/UseMyData";
import {useEffect} from "react";

export const Main =() =>{
    const {myData, getMyDataAll} = UseMyData();
    useEffect(()=>{
        getMyDataAll();
    },[])
    return(
       <>
           <MyData data={myData}/>
           <SocialNetworks data={myData.social_networks}/>
           <ExtraKnowledge data={myData.extra_knowledge} />
           <ListProject />
           <ProgrammingLanguage data={myData.programming_languages}/>
           <ProgrammingTools data={myData.programming_tools}/>
       </>
    )
}