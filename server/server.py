from starlette.applications import Starlette
from router import Router
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

middleware = [
    Middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'])
]


app = Starlette(
    debug=True,
    middleware=middleware,
    routes=Router.get_routes()
)