import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 100vw;
    font-size: 14px;
    background-color: #f2f3f5;
   
    // 备注和金额
    > header {
        display: flex;
        box-shadow: 0 -.5px 1px 0 rgba(210,210,211,0.5);
        label {
            flex: 1;
            display: flex;
            align-items: center;
            width: 50%;
            padding: 10px 5px;
            box-sizing: border-box;
            overflow: hidden;
            svg {
                flex-shrink: 0;
            }
            
            > span {
                flex-shrink: 0;
            }
            
            > input {
                border: none;
                outline: none;
                font-size: 14px;
                background: inherit;
                margin-bottom: 1.5px;
                // 解除 input 的默认宽度
                min-width: 0;
                
                &::-webkit-input-placeholder {
                    line-height: normal;
                }
                &::-ms-input-placeholder {
                    line-height: normal;
                }
            }
        }
        
        > div {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: 15px;
            padding: 10px 5px;
        }
    }
    
    // 数字键盘
    > main {
        display: flex;
        flex-wrap: wrap;
        
        > .btn {
            width: 25%;
        }
        
        .btn {
            border-radius: 0;
            background-color: inherit;
            // 圆角被按钮的before控制
            &::before {
                border-radius: 0;
                border-width: .25px;
                border-color: #ccc;
            }
            
            &:nth-child(4),&:nth-child(15) {
                > div,span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                }
            }
            &:nth-child(4) {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                > span {
                    line-height: normal;
                    margin-left: 4px;
                }
            }
            
            &:nth-child(16) {
                background: rgba(5,200,245);
            }
            
            &.activeBtn {
                background: #e1e1e1;
            }
        }
        
        /* 由于antd的DatePicker会在按钮外部多增加一个div，所以这里需要额外的样式设置
          并清除一些antD带来的样式
        */
        //> div {
        //    width: 25%;
        //    > .btn {
        //        display: flex;
        //        align-items: center;
        //        justify-content: center;
        //        line-height: normal;
        //        font-size: 16px;
        //        > div {
        //            margin-right: 4px;
        //        }
        //        > span {
        //            line-height: 0;
        //        }
        //    }
        //}
    }
    
`;

export default Wrapper;