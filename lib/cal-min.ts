
// const StanderArr = ['+','-','*','/']
const StanderArr = ['+','-','*','/']

interface Res{
    fields: string[],
    formula: string,
}

function calMin(calString: string): Res {
    let formula = calString

    let arr = [calString];
    const list = [] as any[];
    StanderArr.forEach(s => {
        arr.forEach((str:string, index) => {
            const _l = str.split(s);
            if(_l.length > 1){
                const _len = _l.length;
                for(let l = _len-2; l >= 0; l--){
                    _l.splice(l, 0, s)
                }
                list.splice(index, 1, _l)
                // console.log("===str ",s, index, str, '---',list)
            }
        })
        const len = list.length;
        // 展开
        for(let i = len-1; i >= 0; i--){
            if(typeof list[i] != 'string'){
                const _list = list[i];
                list.splice(i, 1, ..._list);
            }
        }
        // console.log('---',list)
        arr = JSON.parse(JSON.stringify(list));
    })

    return {
        formula,
        fields:list
    };
}


const str = '天气+温度*2-5/3/100*44';

console.log(calMin(str))