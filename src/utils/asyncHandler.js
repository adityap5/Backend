// const asyncHandler  = (fn)=> async (res,req,next)=>{
//     try {
//         await(res,req,next)
//     } catch (error) {
//         res.status(err.code || 500).json({ 
//             success : false,
//             message : err.message
//         })
//     }
// }

const asyncHandler = (requestHandler)=>{
    (res,req,next) => {
        Promise.resolver(requestHandler(res,req,next)).
        catch((err)=> next(err))
    }

}

export default asyncHandler;