function ResetButoon({buttonStatu,resetButton}){
    return <button style={{width:"200px",height:"30px",fontSize:"15px",marginTop:"40px",marginLeft:"60px"}} onClick={()=>resetButton()}>{buttonStatu}</button>
}
export default ResetButoon