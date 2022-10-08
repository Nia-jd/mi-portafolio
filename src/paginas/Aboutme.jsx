import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { isVisible } from '@testing-library/user-event/dist/utils'

export const MyComponent = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
)

const Aboutme = () => {
  return (
    
    
    <div id='centro'>
          <img 
            className='foto-perfil'
            src={require(`../img/foto-perfil.jpg`)}
            alt='Foto perfil'/>
          <p><strong>Sobre mi</strong></p>
        <p>Actualmente estoy aprendiento a programar guiandome mas hacia el <strong>Fron end</strong></p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, libero dolore? Distinctio, porro exercitationem. Provident magnam cum, culpa voluptatibus reiciendis est nostrum quod doloribus, libero, reprehenderit incidunt illo doloremque sit.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores voluptatum deleniti, enim odio culpa tempore laborum veniam tenetur mollitia est, quod fuga praesentium impedit velit, dolorum magni! Recusandae, necessitatibus quas?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio accusamus a velit corrupti distinctio rem tempora tempore, pariatur nisi ut. A quidem, illo sint saepe eos iusto aperiam fugit.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis saepe tempore minus vitae sapiente iste ut libero, voluptas ducimus numquam veritatis assumenda minima rem eos dolorem consequuntur eius quae reprehenderit.</p> 
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dicta pariatur animi quas omnis repellendus, ducimus nostrum ipsam in voluptatum reiciendis a explicabo dolor quibusdam distinctio adipisci quo maxime! Aspernatur?</p> 
    </div>
  )
}

export default Aboutme