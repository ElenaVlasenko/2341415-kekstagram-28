
import { createComment } from './templates.js';

const bodyElement = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const bigImg = bigPictureImg.firstElementChild;
const likesEl = document.querySelector('.likes-count');
const commentsEl = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.comments-loader');
const descriptionObj = document.querySelector('.social__caption');
const closeButton = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');
const socialComments = document.querySelector('.social__comments');

const COMMENTS_PART = 2;
let commentsShown = 0;
let commentsList = [];


closeButton.addEventListener(
  'click',
  () => {
    bigPicture.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
);

const renderComments = () => {
  commentsShown += COMMENTS_PART;

  if(commentsShown >= commentsList.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = commentsList.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for(let i = 0; i < commentsShown; i++) {
    const elFragment = createComment(commentsList[i]);
    fragment.append(elFragment);
  }
  const postfix = commentsList.length === 1 ? 'я' : 'ев';
  commentCount.textContent = `${commentsShown} из ${commentsList.length} комментари${postfix}`;

  socialComments.innerHTML = '';
  socialComments.append(fragment);

};

commentsLoader.addEventListener('click', renderComments);


const getBigPicture = ({ url, description, likes, comments }) => {
  bigImg.src = url;
  likesEl.textContent = likes;
  commentsEl.textContent = comments;
  descriptionObj.textContent = description;
  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const el = createComment(comment);
    fragment.append(el);
  });

  socialComments.textContent = '';
  socialComments.appendChild(fragment);

  commentsShown = 0;
  commentsList = comments;

  renderComments();
};

export { getBigPicture };
