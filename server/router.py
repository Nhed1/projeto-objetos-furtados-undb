from starlette.routing import Route
from actions.cpf_request import CpfRequestAction

BASE_PATH = '/consulta/v1'

class Router:

    @staticmethod
    def get_routes() -> list:
        return [
            Route(f'{BASE_PATH}/cpf_request/', CpfRequestAction.insert_cpf_request, methods=['POST']),
            Route(f'{BASE_PATH}/cpf_request/{{id}}', CpfRequestAction.update_item_request, methods=['PUT']),
            Route(f'{BASE_PATH}/cpf_request/', CpfRequestAction.get_all_cpf_requests, methods=['GET']),
            Route(f'{BASE_PATH}/cpf_request/{{id}}', CpfRequestAction.get_cpf_request, methods=['GET']),
            Route(f'{BASE_PATH}/cpf_request/{{id}}', CpfRequestAction.delete_cpf_request, methods=['DELETE'])
        ]


