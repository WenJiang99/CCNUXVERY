import os

ROOT_PATH = './files/'

START_TAG = '<tbody>'
END_TAG = '</tbody>'


def get_root_dir():
    if not os.path.exists(ROOT_PATH):
        os.mkdir(ROOT_PATH)
    return ROOT_PATH


def create_tr_tag(line: int) -> str:
    column = 1
    tr = '<tr>'
    while column <= line:
        if column == 1:
            tr += '''
                    <th>{}*{} = {}</th>
                    '''.format(column, line, line * column)
        else:
            tr += '''
                    <td>{}*{} = {}</td>
                    '''.format(column, line, line * column)
        column += 1

    return tr + '</tr>\n'


def create_html(total_line:int):
    html = START_TAG
    current_line = 1
    while current_line <= total_line:
        html += create_tr_tag(current_line)
        current_line += 1
    return html + END_TAG


def save_to_file(file_name: str):
    with open(get_root_dir() + file_name, 'w') as file:
        file.write(create_html(9))


if __name__ == '__main__':
    save_to_file('index.html')
