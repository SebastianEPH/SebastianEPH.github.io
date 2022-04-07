import {Col, FloatingLabel, Form} from "react-bootstrap";
import "./form.css"

export const InputForm =({data})=>{
    return(
        <Col md={data.col|| ""} className={data.class + " mb-3"}>
            <FloatingLabel id={"input-form"}  label={data.label || ""}>
                {data.textarea ?
                    <Form.Control id={"input-form"}
                                  as="textarea"
                                  name={data.name}
                                  autoComplete={"off"}
                                  placeholder="on"
                                  style={data.textarea? { height: '150px' }: {}}
                                  value={data.value || ""}
                                  onChange={(e)=>data.onChangeForm(e)}
                    />
                    :
                    <Form.Control id={"input-form"}
                                  name={data.name}
                                  autoComplete={"off"}
                                  type={"text"}
                                  placeholder="on"
                                  value={data.value || ""}
                                  onChange={(e)=>data.onChangeForm(e)}
                    />
                }
                </FloatingLabel>
        </Col>
    ) //controlId="floatingTextarea2"onChange={(e)=>updateHook(e,"dol")}
}