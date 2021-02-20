export const getObj = (obj)=>{

    const {grid}= obj
   console.log(grid);
    return JSON.stringify(grid, null, 2);

}