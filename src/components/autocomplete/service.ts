import 'whatwg-fetch';
import * as $ from 'jquery';

export default function searchWikipedia (term:Array<string>): Promise<string> {
    console.log(term);
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term[0]
        }
    }).promise();
}