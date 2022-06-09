from starlette.routing import Route
from actions.item_request import ItemRequestAction

BASE_PATH = '/consulta/v1'

class Router:

    @staticmethod
    def get_routes() -> list:
        return [
            Route(f'{BASE_PATH}/item_request/', ItemRequestAction.insert_item_request, methods=['POST']),
            Route(f'{BASE_PATH}/item_request/{{id}}', ItemRequestAction.update_item_request, methods=['PUT']),
            Route(f'{BASE_PATH}/item_request/', ItemRequestAction.get_all_item_requests, methods=['GET']),
            Route(f'{BASE_PATH}/item_request/{{id}}', ItemRequestAction.get_item_request, methods=['GET']),
            Route(f'{BASE_PATH}/item_request/{{id}}', ItemRequestAction.delete_item_request, methods=['DELETE'])
        ]


