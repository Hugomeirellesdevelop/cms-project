"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("../domain/entities/post.entity");
const create_Post_usecase_1 = require("./usecase/create-Post.usecase");
const delete_Post_usecase_1 = require("./usecase/delete-Post.usecase");
const find_all_categorias_usecase_1 = require("./usecase/find-all-categorias.usecase");
const find_all_usecase_1 = require("./usecase/find-all.usecase");
const find_one_usecase_1 = require("./usecase/find-one.usecase");
const update_Post_usecase_1 = require("./usecase/update-Post.usecase");
const save_image_post_usecase_1 = require("./usecase/save-image-post.usecase");
const get_image_usecase_1 = require("./usecase/get-image.usecase");
let PostsService = class PostsService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async create(createPostDto) {
        const ucPost = new create_Post_usecase_1.CreatePostUseCase(this.postRepository);
        return await ucPost.handler({ post: createPostDto });
    }
    async FindAllPostsFromCategoria(categoriaId) {
        const ucPost = new find_all_categorias_usecase_1.FindAllPostsFromCategoria(this.postRepository);
        return await ucPost.handler({ categoriaId });
    }
    async findAll() {
        const ucPost = new find_all_usecase_1.FindAllPostsUseCase(this.postRepository);
        return await ucPost.handler();
    }
    async findOne(id) {
        const udFindOne = new find_one_usecase_1.FindOnePostsUseCase(this.postRepository);
        return await udFindOne.handler({ id });
    }
    async update(id, updatePostDto) {
        const updatePost = new update_Post_usecase_1.UpdatePostUseCase(this.postRepository);
        return updatePost.handler({ post: {
                id,
                categoriaId: updatePostDto.categoriaId,
                content: updatePostDto.content,
                imageUrl: updatePostDto.imageUrl,
                tipo: updatePostDto.tipo,
                title: updatePostDto.title
            } });
    }
    async remove(id) {
        const ucDelete = new delete_Post_usecase_1.DeletePostUseCase(this.postRepository);
        return ucDelete.handler({ id });
    }
    async saveImage(file, id) {
        const ucSalvaImagem = new save_image_post_usecase_1.SaveImagePostUseCase(this.postRepository);
        return await ucSalvaImagem.handler({ id, file });
    }
    async getImage(id) {
        const ucGetImage = new get_image_usecase_1.GetImageUseCase(this.postRepository);
        return await ucGetImage.handler({ id });
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map