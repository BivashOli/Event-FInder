import {getUserById, userExistsByEmail} from '../controller/UserController'

function testGetUserById() {
     console.log(getUserById('658c5c00f4188e8a47dd7bf3')     )
}

testGetUserById()



describe('getUserById', ()=> {
     test('functionality', async ()=> {
          const x = await getUserById('658c5c00f4188e8a47dd7bf3')
          console.log(x)
     })
})