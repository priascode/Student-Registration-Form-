function Table({tableData}){
    return(
       <div>
         <div className="ttitle">Students Enrolled</div>
        <table className="mytable">
            
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Description</th>
                    <th>image</th>
                
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td><b>{data.fullName}</b><br></br>{data.emailAddress}<br/> {data.website}<br/> {data.Gender}<br/> {data.Skills}</td>
                            <td><img src={data.imageLink} alt="img not found" /></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
       </div>
    )
}

export default Table;