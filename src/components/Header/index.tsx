import todoLogo from '../../assets/logo.svg';

import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <img
        src={todoLogo}
        alt="Imagem de um foguete com o nome ToDo na cor azul e roxo"
      />
    </header>
  )
}

export { Header }