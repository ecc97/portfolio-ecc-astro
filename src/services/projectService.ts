import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Project } from '../types/IProjects';

export const getProjects = async (): Promise<Project[]> => {
    try {
        const projectsCol = collection(db, 'projects');
        const projectSnapshot = await getDocs(projectsCol);
        const projectList = projectSnapshot.docs.map(doc => doc.data() as Project);
        return projectList;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}
