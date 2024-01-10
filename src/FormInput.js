function FormInput({handleChange, formInputData, handleSubmit}){
    return(
    
        <form>

          <div className="formtitle">Registeration Form</div>
          <div className=" d-flex ">
            <p> Name:</p>
            <input type="text" onChange={handleChange} value={formInputData.fullName} name="fullName" className="form-control"  placeholder="Full Name" />
          </div><br/>
          <div className=" d-flex ">
            <p>Email id:</p>
            <input type="email" onChange={handleChange} value={formInputData.emailAddress} name="emailAddress" className="form-control" placeholder="Email Address" />
          </div><br/>
          <div className=" d-flex ">
            <p>Website:</p>
            <input type="text" onChange={handleChange} value={formInputData.website} name="website" className="form-control" placeholder="Website" />
          </div><br/>
          <div className=" d-flex ">
            <p>Image Link:</p>
            <input type="text" onChange={handleChange} value={formInputData.imageLink} name="imageLink" className="form-control" placeholder="Image Link" />
          </div><br/>
          <div>
            Gender:
            <input type="radio" id="mal"onChange={handleChange} value="Male" name="Gender"  className="rad"/>
            <label for="mal">Male</label>
            <input type="radio" id="femal" onChange={handleChange} value="Female" name="Gender" className="rad"/>
            <label for="femal">Female</label>
          </div><br/>
          <div >
            Skills:
            <input type="checkbox" id="html" onChange={handleChange} value="Html" name="Skills" className="ckbox"  />
            <label for="html">Html</label>
            <input type="checkbox" id="CSS" onChange={handleChange} value="CSS" name="Skills" className="ckbox"  />
            <label for="CSS">CSS</label>
            <input type="checkbox" id="js"onChange={handleChange} value="Javascript" name="Skills" className="ckbox"  />
            <label for="js">Javascript</label>
          </div>
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
            <input type="reset"  className="btn btn-danger" />
        </form>
     
      
    )
    }
    
    export default FormInput;