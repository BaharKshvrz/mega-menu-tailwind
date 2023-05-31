type MenuItem = {
    id: number;
    title: string;
    link: string;
    position: number;
};

type SubCategory = {
    id: number;
    name: string;
    parent_id: number;
};

type Category = {
    id: number;
    name: string;
    link: string;
    sub_category: SubCategory[];
};

type Info = {
    name: string;
    phone_number: string;
};

type AllMenu = {
    result: string,
    categories : Category[],
    menus : MenuItem[],
    top_menus : MenuItem[],
    info: Info,
}
