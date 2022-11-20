// import {useParams} from "react-router-dom";
// import {Container} from "react-bootstrap";
// // import {ItemFeature} from "./items/ItemFeature";
// import { Toaster } from 'react-hot-toast';
// // import {ItemScreenshot} from "./items/ItemScreenshot";
// import {ItemLanguage} from "./items/ItemLanguage";
// import {UseProjects} from "../../../Use/UseProjects";
// import {useEffect} from "react";
//
// export const UpdateProject =()=>{
//     const {projects_id} = useParams();
//     const {project, getProject} = UseProjects([])
//
//     useEffect(()=>{
//         getProject(projects_id);
//     },[])
//
//     return(
//         <Container>
//             <Toaster />
//             {project.languages &&
//                 <ItemLanguage />
//             }
//             <div>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, consectetur cum dicta dolorem dolores exercitationem illum inventore iste mollitia necessitatibus pariatur provident quam quibusdam recusandae reprehenderit repudiandae, rerum temporibus vitae?
//             </div>
//
//             {/*{project.features &&*/}
//             {/*    <ItemFeature*/}
//             {/*        features={project.features}*/}
//             {/*        typeName={"features"}*/}
//             {/*        reloadForDB={getProject}*/}
//             {/*        onlyRead={false}*/}
//             {/*    />*/}
//             {/*}*/}
//             {/*{project.screenshots &&*/}
//             {/*    <ItemScreenshot*/}
//             {/*        screenshots={project.screenshots}*/}
//             {/*        typeName={"screenshots"}*/}
//             {/*        reloadForDB={getProject}*/}
//             {/*        onlyRead={false}*/}
//             {/*    />*/}
//             {/*}*/}
//
//         </Container>
//     )
// }