export function getPathToAsset(type, name){
    var relativePath = '/assets/';
    switch (type){
        case 'image':
            relativePath += 'img/'
            break;
        default:
            console.log('invalid relative path');
    }
    relativePath += name;

    return PUBLIC_PATH+relativePath;
}