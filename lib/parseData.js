export const world = (data) => {
    const worldData = {
        links: [
            { "source": "World", "target": "World", "value": 1 },
        ],
        nodes: [
            { "id": "World", "group": -1, "r": 1, "img": "http://clipartmag.com/images/spinning-globe-gif-22.gif" },
            { "id": "Africa", "group": 0, "r": 1, "img": "https://ze-africanews.com/wp-content/uploads/2016/10/Africa-Map-Large-transparent.png" },
            { "id": "Europe", "group": 0, "r": 1, "img": "https://banner2.kisspng.com/20180426/hxe/kisspng-european-union-map-clip-art-continent-5ae24753540637.3402845015247788353442.jpg" },
            { "id": "North America", "group": 0, "r": 1, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Naunion.svg/220px-Naunion.svg.png" },
            { "id": "South America", "group": 0, "r": 1, "img": "http://www.clker.com/cliparts/k/a/6/i/e/f/continent-of-south-america-green-md.png" },
            { "id": "Asia", "group": 0, "r": 1, "img": "https://www.tritech.co.uk/media/map/asia.png" },
            { "id": "Oceania", "group": 0, "r": 1, "img": "https://cdn.pixabay.com/photo/2013/07/12/17/00/continent-151644_960_720.png" },
        
            { "id": "Afghanistan", "group": 1, "r": 0, "img": "https://cdn.countryflags.com/thumbs/afghanistan/flag-3d-round-500.png" },
            { "id": "Albania", "group": 2, "r": 0, "img": "https://cdn.countryflags.com/thumbs/albania/flag-3d-round-500.png" },
            { "id": "Algeria", "group": 3, "r": 0, "img": "https://cdn.countryflags.com/thumbs/algeria/flag-3d-round-500.png" },
            { "id": "Andorra", "group": 4, "r": 0, "img": "https://cdn.countryflags.com/thumbs/andorra/flag-3d-round-500.png" },
            { "id": "Angola", "group": 5, "r": 0, "img": "https://cdn.countryflags.com/thumbs/angola/flag-3d-round-500.png" },
            { "id": "Antigua and Barbuda", "group": 6, "r": 0, "img": "https://cdn.countryflags.com/thumbs/antigua-and-barbuda/flag-3d-round-500.png" },
            { "id": "Argentina", "group": 7, "r": 0, "img": "https://cdn.countryflags.com/thumbs/argentina/flag-3d-round-500.png" },
            { "id": "Armenia", "group": 8, "r": 0, "img": "https://cdn.countryflags.com/thumbs/armenia/flag-3d-round-500.png" },
            { "id": "Australia", "group": 9, "r": 0, "img": "https://cdn.countryflags.com/thumbs/australia/flag-3d-round-500.png" },
            { "id": "Austria", "group": 10, "r": 0, "img": "https://cdn.countryflags.com/thumbs/austria/flag-3d-round-500.png" },
            { "id": "Azerbaijan", "group": 11, "r": 0, "img": "https://cdn.countryflags.com/thumbs/azerbaijan/flag-3d-round-500.png" },
            { "id": "Bahamas", "group": 12, "r": 0, "img": "https://cdn.countryflags.com/thumbs/bahamas/flag-3d-round-500.png" },
            { "id": "Bahrain", "group": 13, "r": 0, "img": "https://cdn.countryflags.com/thumbs/bahrain/flag-3d-round-500.png" },
            { "id": "Bangladesh", "group": 14, "r": 0, "img": "https://cdn.countryflags.com/thumbs/bangladesh/flag-3d-round-500.png" },
            { "id": "Barbados", "group": 15, "r": 0, "img": "https://cdn.countryflags.com/thumbs/barbados/flag-3d-round-500.png" },
            { "id": "Belarus", "group": 16, "r": 0, "img": "https://cdn.countryflags.com/thumbs/belarus/flag-3d-round-500.png" },
            { "id": "Belgium", "group": 17, "r": 0, "img": "https://cdn.countryflags.com/thumbs/belgium/flag-3d-round-500.png" },
            { "id": "Belize", "group": 18, "r": 0, "img": "https://cdn.countryflags.com/thumbs/belize/flag-3d-round-500.png" },
            { "id": "Benin", "group": 19, "r": 0, "img": "https://cdn.countryflags.com/thumbs/benin/flag-3d-round-500.png" },
            { "id": "Bermuda", "group": 20, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/bermuda-2-256.png" },
            { "id": "Bhutan", "group": 21, "r": 0, "img": "https://cdn.countryflags.com/thumbs/bhutan/flag-3d-round-500.png" },
            { "id": "Bolivia", "group": 22, "r": 0, "img": "https://cdn.countryflags.com/thumbs/bolivia/flag-3d-round-500.png" },
            { "id": "Bosnia and Herzegovina", "group": 23, "r": 0, "img": "https://cdn.countryflags.com/thumbs/bosnia-and-herzegovina/flag-3d-round-500.png" },
            { "id": "Botswana", "group": 24, "r": 0, "img": "https://cdn.countryflags.com/thumbs/botswana/flag-3d-round-500.png" },
            { "id": "Brazil", "group": 25, "r": 0, "img": "https://cdn.countryflags.com/thumbs/brazil/flag-3d-round-500.png" },
            { "id": "Brunei Darussalam", "group": 26, "r": 0, "img": "https://cdn.countryflags.com/thumbs/brunei/flag-3d-round-500.png" },
            { "id": "Bulgaria", "group": 27, "r": 0, "img": "https://cdn.countryflags.com/thumbs/bulgaria/flag-3d-round-500.png" },
            { "id": "Burkina Faso", "group": 28, "r": 0, "img": "https://cdn.countryflags.com/thumbs/burkina-faso/flag-3d-round-500.png" },
            { "id": "Burundi", "group": 29, "r": 0, "img": "https://cdn.countryflags.com/thumbs/burundi/flag-3d-round-500.png" },
            { "id": "Cambodia", "group": 30, "r": 0, "img": "https://cdn.countryflags.com/thumbs/cambodia/flag-3d-round-500.png" },
            { "id": "Cameroon", "group": 31, "r": 0, "img": "https://cdn.countryflags.com/thumbs/cameroon/flag-3d-round-500.png" },
            { "id": "Canada", "group": 32, "r": 0, "img": "https://cdn.countryflags.com/thumbs/canada/flag-3d-round-500.png" },
            { "id": "Cape Verde", "group": 33, "r": 0, "img": "https://cdn.countryflags.com/thumbs/cape-verde/flag-3d-round-500.png" },
            { "id": "Central African Republic", "group": 34, "r": 0, "img": "https://cdn.countryflags.com/thumbs/central-african-republic/flag-3d-round-500.png" },
            { "id": "Chad", "group": 35, "r": 0, "img": "https://cdn.countryflags.com/thumbs/chad/flag-3d-round-500.png" },
            { "id": "Chile", "group": 36, "r": 0, "img": "https://cdn.countryflags.com/thumbs/chile/flag-3d-round-500.png" },
            { "id": "China", "group": 37, "r": 0, "img": "https://cdn.countryflags.com/thumbs/china/flag-3d-round-500.png" },
            { "id": "Colombia", "group": 38, "r": 0, "img": "https://cdn.countryflags.com/thumbs/colombia/flag-3d-round-500.png" },
            { "id": "Comoros", "group": 39, "r": 0, "img": "https://cdn.countryflags.com/thumbs/comoros/flag-3d-round-500.png" },
            { "id": "Congo, Dem. Rep.", "group": 40, "r": 0, "img": "https://cdn.countryflags.com/thumbs/congo-democratic-republic-of-the/flag-3d-round-500.png" },
            { "id": "Congo, Rep.", "group": 41, "r": 0, "img": "https://cdn.countryflags.com/thumbs/congo-republic-of-the/flag-3d-round-500.png" },
            { "id": "Cook Islands", "group": 42, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/cook_islands-2-256.png" },
            { "id": "Costa Rica", "group": 43, "r": 0, "img": "https://cdn.countryflags.com/thumbs/costa-rica/flag-3d-round-500.png" },
            { "id": "Cote d'Ivoire", "group": 44, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Cote_dIvoire-2-256.png" },
            { "id": "Croatia", "group": 45, "r": 0, "img": "https://cdn.countryflags.com/thumbs/croatia/flag-3d-round-500.png" },
            { "id": "Cuba", "group": 46, "r": 0, "img": "https://cdn.countryflags.com/thumbs/cuba/flag-3d-round-500.png" },
            { "id": "Cyprus", "group": 47, "r": 0, "img": "https://cdn.countryflags.com/thumbs/cyprus/flag-3d-round-500.png" },
            { "id": "Czech Republic", "group": 48, "r": 0, "img": "https://cdn.countryflags.com/thumbs/czech-republic/flag-3d-round-500.png" },
            { "id": "Denmark", "group": 49, "r": 0, "img": "https://cdn.countryflags.com/thumbs/denmark/flag-3d-round-500.png" },
            { "id": "Djibouti", "group": 50, "r": 0, "img": "https://cdn.countryflags.com/thumbs/djibouti/flag-3d-round-500.png" },
            { "id": "Dominica", "group": 51, "r": 0, "img": "https://cdn.countryflags.com/thumbs/dominica/flag-3d-round-500.png" },
            { "id": "Dominican Republic", "group": 52, "r": 0, "img": "https://cdn.countryflags.com/thumbs/dominican-republic/flag-3d-round-500.png" },
            { "id": "Ecuador", "group": 53, "r": 0, "img": "https://cdn.countryflags.com/thumbs/ecuador/flag-3d-round-500.png" },
            { "id": "Egypt", "group": 54, "r": 0, "img": "https://cdn.countryflags.com/thumbs/egypt/flag-3d-round-500.png" },
            { "id": "El Salvador", "group": 55, "r": 0, "img": "https://cdn.countryflags.com/thumbs/el-salvador/flag-3d-round-500.png" },
            { "id": "Equatorial Guinea", "group": 56, "r": 0, "img": "https://cdn.countryflags.com/thumbs/equatorial-guinea/flag-3d-round-500.png" },
            { "id": "Eritrea", "group": 57, "r": 0, "img": "https://cdn.countryflags.com/thumbs/eritrea/flag-3d-round-500.png" },
            { "id": "Estonia", "group": 58, "r": 0, "img": "https://cdn.countryflags.com/thumbs/estonia/flag-3d-round-500.png" },
            { "id": "Ethiopia", "group": 59, "r": 0, "img": "https://cdn.countryflags.com/thumbs/ethiopia/flag-3d-round-500.png" },
            { "id": "Fiji", "group": 60, "r": 0, "img": "https://cdn.countryflags.com/thumbs/fiji/flag-3d-round-500.png" },
            { "id": "Finland", "group": 61, "r": 0, "img": "https://cdn.countryflags.com/thumbs/finland/flag-3d-round-500.png" },
            { "id": "France", "group": 62, "r": 0, "img": "https://cdn.countryflags.com/thumbs/france/flag-3d-round-500.png" },
            { "id": "French Polynesia", "group": 63, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/french_polynesia-2-512.png" },
            { "id": "Gabon", "group": 64, "r": 0, "img": "https://cdn.countryflags.com/thumbs/gabon/flag-3d-round-500.png" },
            { "id": "Gambia", "group": 65, "r": 0, "img": "https://cdn.countryflags.com/thumbs/gambia/flag-3d-round-500.png" },
            { "id": "Georgia", "group": 66, "r": 0, "img": "https://cdn.countryflags.com/thumbs/georgia/flag-3d-round-500.png" },
            { "id": "Germany", "group": 67, "r": 0, "img": "https://cdn.countryflags.com/thumbs/germany/flag-3d-round-500.png" },
            { "id": "Ghana", "group": 68, "r": 0, "img": "https://cdn.countryflags.com/thumbs/ghana/flag-3d-round-500.png" },
            { "id": "Greece", "group": 69, "r": 0, "img": "https://cdn.countryflags.com/thumbs/greece/flag-3d-round-500.png" },
            { "id": "Grenada", "group": 70, "r": 0, "img": "https://cdn.countryflags.com/thumbs/grenada/flag-3d-round-500.png" },
            { "id": "Guatemala", "group": 71, "r": 0, "img": "https://cdn.countryflags.com/thumbs/guatemala/flag-3d-round-500.png" },
            { "id": "Guinea", "group": 72, "r": 0, "img": "https://cdn.countryflags.com/thumbs/guinea/flag-3d-round-500.png" },
            { "id": "Guinea-Bissau", "group": 73, "r": 0, "img": "https://cdn.countryflags.com/thumbs/guinea-bissau/flag-3d-round-500.png" },
            { "id": "Guyana", "group": 74, "r": 0, "img": "https://cdn.countryflags.com/thumbs/guyana/flag-3d-round-500.png" },
            { "id": "Haiti", "group": 75, "r": 0, "img": "https://cdn.countryflags.com/thumbs/haiti/flag-3d-round-500.png" },
            { "id": "Honduras", "group": 76, "r": 0, "img": "https://cdn.countryflags.com/thumbs/honduras/flag-3d-round-500.png" },
            { "id": "Hong Kong, China", "group": 77, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Hong_Kong-2-256.png" },
            { "id": "Hungary", "group": 78, "r": 0, "img": "https://cdn.countryflags.com/thumbs/hungary/flag-3d-round-500.png" },
            { "id": "Iceland", "group": 79, "r": 0, "img": "https://cdn.countryflags.com/thumbs/iceland/flag-3d-round-500.png" },
            { "id": "India", "group": 80, "r": 0, "img": "https://cdn.countryflags.com/thumbs/india/flag-3d-round-500.png" },
            { "id": "Indonesia", "group": 81, "r": 0, "img": "https://cdn.countryflags.com/thumbs/indonesia/flag-3d-round-500.png" },
            { "id": "Iran (Islamic Republic of)", "group": 82, "r": 0, "img": "https://cdn.countryflags.com/thumbs/iran/flag-3d-round-500.png" },
            { "id": "Iraq", "group": 83, "r": 0, "img": "https://cdn.countryflags.com/thumbs/iraq/flag-3d-round-500.png" },
            { "id": "Ireland", "group": 84, "r": 0, "img": "https://cdn.countryflags.com/thumbs/ireland/flag-3d-round-500.png" },
            { "id": "Israel", "group": 85, "r": 0, "img": "https://cdn.countryflags.com/thumbs/israel/flag-3d-round-500.png" },
            { "id": "Italy", "group": 86, "r": 0, "img": "https://cdn.countryflags.com/thumbs/italy/flag-3d-round-500.png" },
            { "id": "Jamaica", "group": 87, "r": 0, "img": "https://cdn.countryflags.com/thumbs/jamaica/flag-3d-round-500.png" },
            { "id": "Japan", "group": 88, "r": 0, "img": "https://cdn.countryflags.com/thumbs/japan/flag-3d-round-500.png" },
            { "id": "Jordan", "group": 89, "r": 0, "img": "https://cdn.countryflags.com/thumbs/jordan/flag-3d-round-500.png" },
            { "id": "Kazakhstan", "group": 90, "r": 0, "img": "https://cdn.countryflags.com/thumbs/kazakhstan/flag-3d-round-500.png" },
            { "id": "Kenya", "group": 91, "r": 0, "img": "https://cdn.countryflags.com/thumbs/kenya/flag-3d-round-500.png" },
            { "id": "Kiribati", "group": 92, "r": 0, "img": "https://cdn.countryflags.com/thumbs/kiribati/flag-3d-round-500.png" },
            { "id": "Korea, Dem. Rep.", "group": 93, "r": 0, "img": "https://cdn.countryflags.com/thumbs/north-korea/flag-3d-round-500.png" },
            { "id": "Korea, Rep.", "group": 94, "r": 0, "img": "https://cdn.countryflags.com/thumbs/south-korea/flag-3d-round-500.png" },
            { "id": "Kuwait", "group": 95, "r": 0, "img": "https://cdn.countryflags.com/thumbs/kuwait/flag-3d-round-500.png" },
            { "id": "Kyrgyzstan", "group": 96, "r": 0, "img": "https://cdn.countryflags.com/thumbs/kyrgyzstan/flag-3d-round-500.png" },
            { "id": "Lao People's Democratic Republic", "group": 97, "r": 0, "img": "https://cdn.countryflags.com/thumbs/laos/flag-3d-round-500.png" },
            { "id": "Latvia", "group": 98, "r": 0, "img": "https://cdn.countryflags.com/thumbs/latvia/flag-3d-round-500.png" },
            { "id": "Lebanon", "group": 99, "r": 0, "img": "https://cdn.countryflags.com/thumbs/lebanon/flag-3d-round-500.png" },
            { "id": "Lesotho", "group": 100, "r": 0, "img": "https://cdn.countryflags.com/thumbs/lesotho/flag-3d-round-500.png" },
            { "id": "Liberia", "group": 101, "r": 0, "img": "https://cdn.countryflags.com/thumbs/liberia/flag-3d-round-500.png" },
            { "id": "Libyan Arab Jamahiriya", "group": 102, "r": 0, "img": "https://cdn.countryflags.com/thumbs/libya/flag-3d-round-500.png" },
            { "id": "Lithuania", "group": 103, "r": 0, "img": "https://cdn.countryflags.com/thumbs/lithuania/flag-3d-round-500.png" },
            { "id": "Luxembourg", "group": 104, "r": 0, "img": "https://cdn.countryflags.com/thumbs/luxembourg/flag-3d-round-500.png" },
            { "id": "Macao, China", "group": 105, "r": 0, "img": "https://cdn2.iconfinder.com/data/icons/flags-circle-3d/100/Macau-512.png" },
            { "id": "Macedonia", "group": 106, "r": 0, "img": "https://cdn.countryflags.com/thumbs/macedonia/flag-3d-round-500.png" },
            { "id": "Madagascar", "group": 107, "r": 0, "img": "https://cdn.countryflags.com/thumbs/madagascar/flag-3d-round-500.png" },
            { "id": "Malawi", "group": 108, "r": 0, "img": "https://cdn.countryflags.com/thumbs/malawi/flag-3d-round-500.png" },
            { "id": "Malaysia", "group": 109, "r": 0, "img": "https://cdn.countryflags.com/thumbs/malaysia/flag-3d-round-500.png" },
            { "id": "Maldives", "group": 110, "r": 0, "img": "https://cdn.countryflags.com/thumbs/maldives/flag-3d-round-500.png" },
            { "id": "Mali", "group": 111, "r": 0, "img": "https://cdn.countryflags.com/thumbs/mali/flag-3d-round-500.png" },
            { "id": "Malta", "group": 112, "r": 0, "img": "https://cdn.countryflags.com/thumbs/malta/flag-3d-round-500.png" },
            { "id": "Marshall Islands", "group": 113, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/marshall_islands-2-256.png" },
            { "id": "Mauritania", "group": 114, "r": 0, "img": "https://cdn.countryflags.com/thumbs/mauritania/flag-3d-round-500.png" },
            { "id": "Mauritius", "group": 115, "r": 0, "img": "https://cdn.countryflags.com/thumbs/mauritius/flag-3d-round-500.png" },
            { "id": "Mexico", "group": 116, "r": 0, "img": "https://cdn.countryflags.com/thumbs/mexico/flag-3d-round-500.png" },
            { "id": "Micronesia (Federated States of)", "group": 117, "r": 0, "img": "https://cdn.countryflags.com/thumbs/micronesia/flag-3d-round-500.png" },
            { "id": "Moldova", "group": 118, "r": 0, "img": "https://cdn.countryflags.com/thumbs/moldova/flag-3d-round-500.png" },
            { "id": "Monaco", "group": 119, "r": 0, "img": "https://cdn.countryflags.com/thumbs/monaco/flag-3d-round-500.png" },
            { "id": "Mongolia", "group": 120, "r": 0, "img": "https://cdn.countryflags.com/thumbs/mongolia/flag-3d-round-500.png" },
            { "id": "Montenegro", "group": 121, "r": 0, "img": "https://cdn.countryflags.com/thumbs/montenegro/flag-3d-round-500.png" },
            { "id": "Morocco", "group": 122, "r": 0, "img": "https://cdn.countryflags.com/thumbs/morocco/flag-3d-round-500.png" },
            { "id": "Mozambique", "group": 123, "r": 0, "img": "https://cdn.countryflags.com/thumbs/mozambique/flag-3d-round-500.png" },
            { "id": "Myanmar", "group": 124, "r": 0, "img": "https://cdn.countryflags.com/thumbs/myanmar/flag-3d-round-500.png" },
            { "id": "Namibia", "group": 125, "r": 0, "img": "https://cdn.countryflags.com/thumbs/namibia/flag-3d-round-500.png" },
            { "id": "Nauru", "group": 126, "r": 0, "img": "https://cdn.countryflags.com/thumbs/nauru/flag-3d-round-500.png" },
            { "id": "Nepal", "group": 127, "r": 0, "img": "https://cdn.countryflags.com/thumbs/nepal/flag-3d-round-500.png" },
            { "id": "Netherlands", "group": 128, "r": 0, "img": "https://cdn.countryflags.com/thumbs/netherlands/flag-3d-round-500.png" },
            { "id": "Netherlands Antilles", "group": 129, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/netherlands_antilles-2-256.png" },
            { "id": "New Caledonia", "group": 130, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/New_Caledonia-2-256.png" },
            { "id": "New Zealand", "group": 131, "r": 0, "img": "https://cdn.countryflags.com/thumbs/new-zealand/flag-3d-round-500.png" },
            { "id": "Nicaragua", "group": 132, "r": 0, "img": "https://cdn.countryflags.com/thumbs/nicaragua/flag-3d-round-500.png" },
            { "id": "Niger", "group": 133, "r": 0, "img": "https://cdn.countryflags.com/thumbs/niger/flag-3d-round-500.png" },
            { "id": "Nigeria", "group": 134, "r": 0, "img": "https://cdn.countryflags.com/thumbs/nigeria/flag-3d-round-500.png" },
            { "id": "Niue", "group": 135, "r": 0, "img": "https://cdn.countryflags.com/thumbs/niue/flag-3d-round-500.png" },
            { "id": "Norway", "group": 136, "r": 0, "img": "https://cdn.countryflags.com/thumbs/norway/flag-3d-round-500.png" },
            { "id": "Oman", "group": 137, "r": 0, "img": "https://cdn.countryflags.com/thumbs/oman/flag-3d-round-500.png" },
            { "id": "Pakistan", "group": 138, "r": 0, "img": "https://cdn.countryflags.com/thumbs/pakistan/flag-3d-round-500.png" },
            { "id": "Palau", "group": 139, "r": 0, "img": "https://cdn.countryflags.com/thumbs/palau/flag-3d-round-500.png" },
            { "id": "Panama", "group": 140, "r": 0, "img": "https://cdn.countryflags.com/thumbs/panama/flag-3d-round-500.png" },
            { "id": "Papua New Guinea", "group": 141, "r": 0, "img": "https://cdn.countryflags.com/thumbs/papua-new-guinea/flag-3d-round-500.png" },
            { "id": "Paraguay", "group": 142, "r": 0, "img": "https://cdn.countryflags.com/thumbs/paraguay/flag-3d-round-500.png" },
            { "id": "Peru", "group": 143, "r": 0, "img": "https://cdn.countryflags.com/thumbs/peru/flag-3d-round-500.png" },
            { "id": "Philippines", "group": 144, "r": 0, "img": "https://cdn.countryflags.com/thumbs/philippines/flag-3d-round-500.png" },
            { "id": "Poland", "group": 145, "r": 0, "img": "https://cdn.countryflags.com/thumbs/poland/flag-3d-round-500.png" },
            { "id": "Portugal", "group": 146, "r": 0, "img": "https://cdn.countryflags.com/thumbs/portugal/flag-3d-round-500.png" },
            { "id": "Puerto Rico", "group": 147, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Puerto_Rico-2-256.png" },
            { "id": "Qatar", "group": 148, "r": 0, "img": "https://cdn.countryflags.com/thumbs/qatar/flag-3d-round-500.png" },
            { "id": "Romania", "group": 149, "r": 0, "img": "https://cdn.countryflags.com/thumbs/romania/flag-3d-round-500.png" },
            { "id": "Russia", "group": 150, "r": 0, "img": "https://cdn.countryflags.com/thumbs/russia/flag-3d-round-500.png" },
            { "id": "Rwanda", "group": 151, "r": 0, "img": "https://cdn.countryflags.com/thumbs/rwanda/flag-3d-round-500.png" },
            { "id": "Saint Kitts and Nevis", "group": 152, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Saint_Kitts_and_Nevis-2-256.png" },
            { "id": "Saint Lucia", "group": 153, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Saint_Lucia-2-256.png" },
            { "id": "Saint Vincent and the Grenadines", "group": 154, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/Saint_Vincent_and_the_Grenadines-2-256.png" },
            { "id": "Samoa", "group": 155, "r": 0, "img": "https://cdn.countryflags.com/thumbs/samoa/flag-3d-round-500.png" },
            { "id": "San Marino", "group": 156, "r": 0, "img": "https://cdn.countryflags.com/thumbs/san-marino/flag-3d-round-500.png" },
            { "id": "Sao Tome and Principe", "group": 157, "r": 0, "img": "https://cdn.countryflags.com/thumbs/sao-tome-and-principe/flag-3d-round-500.png" },
            { "id": "Saudi Arabia", "group": 158, "r": 0, "img": "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-3d-round-500.png" },
            { "id": "Senegal", "group": 159, "r": 0, "img": "https://cdn.countryflags.com/thumbs/senegal/flag-3d-round-500.png" },
            { "id": "Serbia", "group": 160, "r": 0, "img": "https://cdn.countryflags.com/thumbs/serbia/flag-3d-round-500.png" },
            { "id": "Seychelles", "group": 161, "r": 0, "img": "https://cdn.countryflags.com/thumbs/seychelles/flag-3d-round-500.png" },
            { "id": "Sierra Leone", "group": 162, "r": 0, "img": "https://cdn.countryflags.com/thumbs/sierra-leone/flag-3d-round-500.png" },
            { "id": "Singapore", "group": 163, "r": 0, "img": "https://cdn.countryflags.com/thumbs/singapore/flag-3d-round-500.png" },
            { "id": "Slovakia", "group": 164, "r": 0, "img": "https://cdn.countryflags.com/thumbs/slovakia/flag-3d-round-500.png" },
            { "id": "Slovenia", "group": 165, "r": 0, "img": "https://cdn.countryflags.com/thumbs/slovenia/flag-3d-round-500.png" },
            { "id": "Solomon Islands", "group": 166, "r": 0, "img": "https://cdn.countryflags.com/thumbs/solomon-islands/flag-3d-round-500.png" },
            { "id": "Somalia", "group": 167, "r": 0, "img": "https://cdn.countryflags.com/thumbs/somalia/flag-3d-round-500.png" },
            { "id": "South Africa", "group": 168, "r": 0, "img": "https://cdn.countryflags.com/thumbs/south-africa/flag-3d-round-500.png" },
            { "id": "Spain", "group": 169, "r": 0, "img": "https://cdn.countryflags.com/thumbs/spain/flag-3d-round-500.png" },
            { "id": "Sri Lanka", "group": 170, "r": 0, "img": "https://cdn.countryflags.com/thumbs/sri-lanka/flag-3d-round-500.png" },
            { "id": "Sudan", "group": 171, "r": 0, "img": "https://cdn.countryflags.com/thumbs/sudan/flag-3d-round-500.png" },
            { "id": "Suriname", "group": 172, "r": 0, "img": "https://cdn.countryflags.com/thumbs/suriname/flag-3d-round-500.png" },
            { "id": "Swaziland", "group": 173, "r": 0, "img": "https://cdn.countryflags.com/thumbs/swaziland/flag-3d-round-500.png" },
            { "id": "Sweden", "group": 174, "r": 0, "img": "https://cdn.countryflags.com/thumbs/sweden/flag-3d-round-500.png" },
            { "id": "Switzerland", "group": 175, "r": 0, "img": "https://cdn.countryflags.com/thumbs/switzerland/flag-3d-round-500.png" },
            { "id": "Syria", "group": 176, "r": 0, "img": "https://cdn.countryflags.com/thumbs/syria/flag-3d-round-500.png" },
            { "id": "Taiwan", "group": 177, "r": 0, "img": "https://cdn.countryflags.com/thumbs/taiwan/flag-3d-round-500.png" },
            { "id": "Tajikistan", "group": 178, "r": 0, "img": "https://cdn.countryflags.com/thumbs/tajikistan/flag-3d-round-500.png" },
            { "id": "Tanzania", "group": 179, "r": 0, "img": "https://cdn.countryflags.com/thumbs/tanzania/flag-3d-round-500.png" },
            { "id": "Thailand", "group": 180, "r": 0, "img": "https://cdn.countryflags.com/thumbs/thailand/flag-3d-round-500.png" },
            { "id": "Timor-Leste", "group": 181, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/east_timor-2-256.png" },
            { "id": "Togo", "group": 182, "r": 0, "img": "https://cdn.countryflags.com/thumbs/togo/flag-3d-round-500.png" },
            { "id": "Tonga", "group": 183, "r": 0, "img": "https://cdn.countryflags.com/thumbs/tonga/flag-3d-round-500.png" },
            { "id": "Trinidad and Tobago", "group": 184, "r": 0, "img": "https://cdn.countryflags.com/thumbs/trinidad-and-tobago/flag-3d-round-500.png" },
            { "id": "Tunisia", "group": 185, "r": 0, "img": "https://cdn.countryflags.com/thumbs/tunisia/flag-3d-round-500.png" },
            { "id": "Turkey", "group": 186, "r": 0, "img": "https://cdn.countryflags.com/thumbs/turkey/flag-3d-round-500.png" },
            { "id": "Turkmenistan", "group": 187, "r": 0, "img": "https://cdn.countryflags.com/thumbs/turkmenistan/flag-3d-round-500.png" },
            { "id": "Tuvalu", "group": 188, "r": 0, "img": "https://cdn.countryflags.com/thumbs/tuvalu/flag-3d-round-500.png" },
            { "id": "Uganda", "group": 189, "r": 0, "img": "https://cdn.countryflags.com/thumbs/uganda/flag-3d-round-500.png" },
            { "id": "Ukraine", "group": 190, "r": 0, "img": "https://cdn.countryflags.com/thumbs/ukraine/flag-3d-round-500.png" },
            { "id": "United Arab Emirates", "group": 191, "r": 0, "img": "https://cdn.countryflags.com/thumbs/united-arab-emirates/flag-3d-round-500.png" },
            { "id": "United Kingdom", "group": 192, "r": 0, "img": "https://cdn.countryflags.com/thumbs/united-kingdom/flag-3d-round-500.png" },
            { "id": "United States of America", "group": 193, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/USA_-4-256.png" },
            { "id": "Uruguay", "group": 194, "r": 0, "img": "https://cdn.countryflags.com/thumbs/uruguay/flag-3d-round-500.png" },
            { "id": "Uzbekistan", "group": 195, "r": 0, "img": "https://cdn.countryflags.com/thumbs/uzbekistan/flag-3d-round-500.png" },
            { "id": "Vanuatu", "group": 196, "r": 0, "img": "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/vanuatu-2-256.png" },
            { "id": "Venezuela", "group": 197, "r": 0, "img": "https://cdn.countryflags.com/thumbs/venezuela/flag-3d-round-500.png" },
            { "id": "Vietnam", "group": 198, "r": 0, "img": "https://cdn.countryflags.com/thumbs/vietnam/flag-3d-round-500.png" },
            { "id": "West Bank and Gaza", "group": 199, "r": 0, "img": "https://cdn.countryflags.com/thumbs/palestine/flag-3d-round-500.png" },
            { "id": "Yemen", "group": 200, "r": 0, "img": "https://cdn.countryflags.com/thumbs/yemen/flag-3d-round-500.png" },
            { "id": "Zambia", "group": 201, "r": 0, "img": "https://cdn.countryflags.com/thumbs/zambia/flag-3d-round-500.png" },
            { "id": "Zimbabwe", "group": 202, "r": 0, "img": "https://cdn.countryflags.com/thumbs/zimbabwe/flag-3d-round-500.png" },
        ]
    }

    return worldData;
}

export const asia = (data) => {
    
    // asiaData is the ultimate object we'd like to return
    // asiaData = {nodes: {
                //     id: Afghanistan,                             
                //     id: AfghanistanFactor1, 
                //     id: AfghanistanFactor2, 
                //     id: AfghanistanFactor34
                // }, 
                // links: {
                //     src Asia--targ Afghanistan,                  // STEP 1
                //     src Afghanistan--targ AfghanistanFactor1,    // STEP 2
                //     src Afghanistan--targ AfghanistanFactor2,
                //     src Afghanistan--targ AfghanistanFactor3,
                // }}

    // as we go through the continents, just change lines: 1, 21, 28
    const continentData = {
        links: [],
        nodes: [
            { "id": "Asia", "group": 0, "r": 1, "img": "https://www.tritech.co.uk/media/map/asia.png" }
        ]
    }

    ////////////////////////////////////// LINKS //////////////////////////////////////
    // STEP 1: find all links where the continent connects to the country
    const continentCountries =  data.links.filter((d) => {
        return d.source == 'Asia';
    });

    // STEP 2: for each country on that continent, find all links where factors connect to the country
    let continentTargets = [];
    
    for (let i = 0; i < continentCountries.length; i++) {
        let country = continentCountries[i];

        let countryFactors = data.links.filter((d) => {
            return country.target == d.source;
        })

        continentTargets = continentTargets.concat(countryFactors);
    }

    ////////////////////////////////////// NODES //////////////////////////////////////
    // STEP 3: for each country on that continent, 
    let continentNodes = [];
    for (let i = 0; i < continentCountries.length; i++) {
        let countryNodes = data.nodes.filter((d) => {
            
            // return (d.id.includes(continentTargets[i].source));
            return (d.id == continentCountries[i].target);
        });

        continentNodes = continentNodes.concat(countryNodes);
    }

    let continentFactorNodes = [];
    for (let i = 0; i < continentNodes.length; i++) {
        let countryFactorNodes = data.nodes.filter((d) => {
            return d.group == continentNodes[i].group;
        })
        continentFactorNodes = continentFactorNodes.concat(countryFactorNodes);
        // debugger
    }

    continentData.links = continentData.links.concat(continentCountries, continentTargets);
    continentData.nodes = continentData.nodes.concat(continentNodes, continentFactorNodes);
    
    return continentData;
}

export const europe = (data) => {

    const continentData = {
        links: [],
        nodes: [
            { "id": "Europe", "group": 0, "r": 1, "img": "https://banner2.kisspng.com/20180426/hxe/kisspng-european-union-map-clip-art-continent-5ae24753540637.3402845015247788353442.jpg" }
        ]
    }

    ////////////////////////////////////// LINKS //////////////////////////////////////
    // STEP 1: find all links where the continent connects to the country
    const continentCountries = data.links.filter((d) => {
        return d.source == 'Europe';
    });

    // STEP 2: for each country on that continent, find all links where factors connect to the country
    let continentTargets = [];

    for (let i = 0; i < continentCountries.length; i++) {
        let country = continentCountries[i];

        let countryFactors = data.links.filter((d) => {
            return country.target == d.source;
        })

        continentTargets = continentTargets.concat(countryFactors);
    }

    ////////////////////////////////////// NODES //////////////////////////////////////
    // STEP 3: for each country on that continent, 
    let continentNodes = [];
    for (let i = 0; i < continentCountries.length; i++) {
        let countryNodes = data.nodes.filter((d) => {

            // return (d.id.includes(continentTargets[i].source));
            return (d.id == continentCountries[i].target);
        });

        continentNodes = continentNodes.concat(countryNodes);
    }

    let continentFactorNodes = [];
    for (let i = 0; i < continentNodes.length; i++) {
        let countryFactorNodes = data.nodes.filter((d) => {
            return d.group == continentNodes[i].group;
        })
        continentFactorNodes = continentFactorNodes.concat(countryFactorNodes);
    }

    continentData.links = continentData.links.concat(continentCountries, continentTargets);
    continentData.nodes = continentData.nodes.concat(continentNodes, continentFactorNodes);

    return continentData;
}

export const africa = (data) => {

    const continentData = {
        links: [],
        nodes: [
            { "id": "Africa", "group": 0, "r": 1, "img": "https://ze-africanews.com/wp-content/uploads/2016/10/Africa-Map-Large-transparent.png" },
        ]
    }

    ////////////////////////////////////// LINKS //////////////////////////////////////
    // STEP 1: find all links where the continent connects to the country
    const continentCountries = data.links.filter((d) => {
        return d.source == 'Africa';
    });

    // STEP 2: for each country on that continent, find all links where factors connect to the country
    let continentTargets = [];

    for (let i = 0; i < continentCountries.length; i++) {
        let country = continentCountries[i];

        let countryFactors = data.links.filter((d) => {
            return country.target == d.source;
        })

        continentTargets = continentTargets.concat(countryFactors);
    }

    ////////////////////////////////////// NODES //////////////////////////////////////
    // STEP 3: for each country on that continent, 
    let continentNodes = [];
    for (let i = 0; i < continentCountries.length; i++) {
        let countryNodes = data.nodes.filter((d) => {

            // return (d.id.includes(continentTargets[i].source));
            return (d.id == continentCountries[i].target);
        });

        continentNodes = continentNodes.concat(countryNodes);
    }

    let continentFactorNodes = [];
    for (let i = 0; i < continentNodes.length; i++) {
        let countryFactorNodes = data.nodes.filter((d) => {
            return d.group == continentNodes[i].group;
        })
        continentFactorNodes = continentFactorNodes.concat(countryFactorNodes);
    }

    continentData.links = continentData.links.concat(continentCountries, continentTargets);
    continentData.nodes = continentData.nodes.concat(continentNodes, continentFactorNodes);

    return continentData;
}

export const northamerica = (data) => {

    const continentData = {
        links: [],
        nodes: [
            { "id": "North America", "group": 0, "r": 1, "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Naunion.svg/220px-Naunion.svg.png" },
        ]
    }

    ////////////////////////////////////// LINKS //////////////////////////////////////
    // STEP 1: find all links where the continent connects to the country
    const continentCountries = data.links.filter((d) => {
        return d.source == 'North America';
    });

    // STEP 2: for each country on that continent, find all links where factors connect to the country
    let continentTargets = [];

    for (let i = 0; i < continentCountries.length; i++) {
        let country = continentCountries[i];

        let countryFactors = data.links.filter((d) => {
            return country.target == d.source;
        })

        continentTargets = continentTargets.concat(countryFactors);
    }

    ////////////////////////////////////// NODES //////////////////////////////////////
    // STEP 3: for each country on that continent, 
    let continentNodes = [];
    for (let i = 0; i < continentCountries.length; i++) {
        let countryNodes = data.nodes.filter((d) => {

            // return (d.id.includes(continentTargets[i].source));
            return (d.id == continentCountries[i].target);
        });

        continentNodes = continentNodes.concat(countryNodes);
    }

    let continentFactorNodes = [];
    for (let i = 0; i < continentNodes.length; i++) {
        let countryFactorNodes = data.nodes.filter((d) => {
            return d.group == continentNodes[i].group;
        })
        continentFactorNodes = continentFactorNodes.concat(countryFactorNodes);
    }

    continentData.links = continentData.links.concat(continentCountries, continentTargets);
    continentData.nodes = continentData.nodes.concat(continentNodes, continentFactorNodes);

    return continentData;
}

export const southamerica = (data) => {

    const continentData = {
        links: [],
        nodes: [
            { "id": "South America", "group": 0, "r": 1, "img": "https://banner2.kisspng.com/20180413/dhq/kisspng-south-america-latin-america-vector-map-drawing-aruba-5ad071c64df831.5462189715236100543194.jpg" },
        ]
    }

    ////////////////////////////////////// LINKS //////////////////////////////////////
    // STEP 1: find all links where the continent connects to the country
    const continentCountries = data.links.filter((d) => {
        return d.source == 'South America';
    });

    // STEP 2: for each country on that continent, find all links where factors connect to the country
    let continentTargets = [];

    for (let i = 0; i < continentCountries.length; i++) {
        let country = continentCountries[i];

        let countryFactors = data.links.filter((d) => {
            return country.target == d.source;
        })

        continentTargets = continentTargets.concat(countryFactors);
    }

    ////////////////////////////////////// NODES //////////////////////////////////////
    // STEP 3: for each country on that continent, 
    let continentNodes = [];
    for (let i = 0; i < continentCountries.length; i++) {
        let countryNodes = data.nodes.filter((d) => {

            // return (d.id.includes(continentTargets[i].source));
            return (d.id == continentCountries[i].target);
        });

        continentNodes = continentNodes.concat(countryNodes);
    }

    let continentFactorNodes = [];
    for (let i = 0; i < continentNodes.length; i++) {
        let countryFactorNodes = data.nodes.filter((d) => {
            return d.group == continentNodes[i].group;
        })
        continentFactorNodes = continentFactorNodes.concat(countryFactorNodes);
    }

    continentData.links = continentData.links.concat(continentCountries, continentTargets);
    continentData.nodes = continentData.nodes.concat(continentNodes, continentFactorNodes);

    return continentData;
}

export const oceania = (data) => {

    const continentData = {
        links: [],
        nodes: [
            { "id": "Oceania", "group": 0, "r": 1, "img": "https://cdn.pixabay.com/photo/2013/07/12/17/00/continent-151644_960_720.png" },
        ]
    }

    ////////////////////////////////////// LINKS //////////////////////////////////////
    // STEP 1: find all links where the continent connects to the country
    const continentCountries = data.links.filter((d) => {
        return d.source == 'Oceania';
    });

    // STEP 2: for each country on that continent, find all links where factors connect to the country
    let continentTargets = [];

    for (let i = 0; i < continentCountries.length; i++) {
        let country = continentCountries[i];

        let countryFactors = data.links.filter((d) => {
            return country.target == d.source;
        })

        continentTargets = continentTargets.concat(countryFactors);
    }

    ////////////////////////////////////// NODES //////////////////////////////////////
    // STEP 3: for each country on that continent, 
    let continentNodes = [];
    for (let i = 0; i < continentCountries.length; i++) {
        let countryNodes = data.nodes.filter((d) => {

            // return (d.id.includes(continentTargets[i].source));
            return (d.id == continentCountries[i].target);
        });

        continentNodes = continentNodes.concat(countryNodes);
    }

    let continentFactorNodes = [];
    for (let i = 0; i < continentNodes.length; i++) {
        let countryFactorNodes = data.nodes.filter((d) => {
            return d.group == continentNodes[i].group;
        })
        continentFactorNodes = continentFactorNodes.concat(countryFactorNodes);
    }

    continentData.links = continentData.links.concat(continentCountries, continentTargets);
    continentData.nodes = continentData.nodes.concat(continentNodes, continentFactorNodes);

    return continentData;
}