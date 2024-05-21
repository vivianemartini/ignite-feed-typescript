import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

export function Sidebar() {

    const [profileData, setProfileData] = useState({
        name: 'Viviane Martini',
        role: 'Web Developer',
        avatarUrl: 'https://xesque.rocketseat.dev/users/avatar/profile-45fd3c33-6ed8-43e5-a837-87565fe2feee-1674592517618.jpg',
        coverImageUrl: 'https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50'
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editProfileData, setEditProfileData] = useState(profileData);

    function handleEditClick() {
        setIsEditing(true);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setEditProfileData({
            ...editProfileData,
            [name]: value,
        });
    }

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();
        setProfileData(editProfileData);
        setIsEditing(false);
    }

    function handleCancelClick() {
        setIsEditing(false);
        setEditProfileData(profileData);
    }

    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={profileData.coverImageUrl}
                alt="Cover image"
            />

            <div className={styles.profile}>
                <Avatar src={profileData.avatarUrl} />

                <strong>{profileData.name}</strong>
                <span>{profileData.role}</span>
            </div>

            <footer>
                {isEditing ? (
                    <form onSubmit={handleFormSubmit} className={styles.editForm}>
                        <div>
                            <label>
                                Nome:
                                <input
                                    type="text"
                                    name="name"
                                    value={editProfileData.name}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Cargo:
                                <input
                                    type="text"
                                    name="role"
                                    value={editProfileData.role}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                URL do Avatar:
                                <input
                                    type="text"
                                    name="avatarUrl"
                                    value={editProfileData.avatarUrl}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                URL da Imagem de Capa:
                                <input
                                    type="text"
                                    name="coverImageUrl"
                                    value={editProfileData.coverImageUrl}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <button type="submit">Salvar</button>
                        <button type="button" onClick={handleCancelClick}>Cancelar</button>
                    </form>
                ) : (
                    <a href="#" onClick={handleEditClick}>
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                )}
            </footer>
        </aside>
    )
}