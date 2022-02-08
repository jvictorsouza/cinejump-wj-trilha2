import { StrObjectStr, StrObjectNmb, StrObjectObjectArrayStr } from "../interfaces";

export const NavListOptions: string[] = ['Página inicial', 'Camisetas', 'Calças', 'Calçados', 'Contato' ]

export const NavListOptionsRoutes: StrObjectStr = {
    'Página inicial': '/home',
    'Camisetas': '/shop/tshirts',
    'Calças': '/shop/pants',
    'Calçados': '/shop/shoes',
}
export const MapperProdutsIds: StrObjectNmb = {
    'tshirts': 1,
    'pants': 2,
    'shoes': 3
}

export const MapperColor: StrObjectStr = {
    '#0c0d0d': 'Preta',
    '#f36324': 'Laranja',
    '#f3ec24': 'Amarela',
    '#28a3aa': 'Azul',
    '#e924f3': 'Rosa',
    '#f5f5dc': 'Bege',
    '#8a8a87': 'Cinza'
}

export const FilterOptionsType: Array<Array<string>> = [['color_pallete'], ['list'], ['color_pallete', 'list']]

export const FilterOptions: StrObjectObjectArrayStr = {
    'Camisetas': {
        'Cores': ['#0c0d0d', '#f36324', '#f3ec24', '#e924f3'],
    },
    'Calças': {
        'Gênero': ['Masculina', 'Feminina']
    },
    'Calçados': {
        'Cores': ['#0c0d0d', '#f36324', '#f3ec24', '#e924f3', '#8a8a87', '#28a3aa', '#f5f5dc'],
    }

}

export const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet malesuada dolor, id mollis lorem bibendum at. Nulla a sem sed augue laoreet fermentum. Cras vitae sapien et est hendrerit bibendum ut non sem. Etiam interdum nunc sed odio faucibus luctus. Nulla dui velit, cursus eget ante sed, egestas ultrices velit. Donec lacus dolor, vulputate vitae dignissim sit amet, suscipit eu odio. Vestibulum vestibulum aliquam gravida. Fusce porttitor leo est, eu feugiat nibh accumsan ac. Fusce consectetur semper tincidunt. Sed consectetur dolor eu nunc congue, pharetra porta risus dapibus. Sed nisl ex, viverra quis odio eu, pellentesque finibus est. Curabitur felis enim, fringilla in erat et, malesuada tincidunt eros. Sed ac est sit amet metus rutrum pretium. Aliquam id libero mauris.'
