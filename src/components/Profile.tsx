import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://images-apilist-fun.sfo2.cdn.digitaloceanspaces.com/adorable_avatars_api.png" alt="Avatar" />
      <div>
        <strong>Vinicius Masiero</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
