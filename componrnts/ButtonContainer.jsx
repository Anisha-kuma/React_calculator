import styles from './ButtonContainer.module.css';

const ButtonContainer=({onButtonClick})=>{
   
        const buttonNames = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'];
        return (
        <div className={styles.buttonCointeiner}>
        {
            buttonNames.map(butt=>
                <button className={styles.button} onClick={onButtonClick}>{butt}</button>
            )
            
        }
       </div>
      
    );
};
export default ButtonContainer;
